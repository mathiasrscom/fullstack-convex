import { Document, Id } from './_generated/dataModel'
import { mutation } from './_generated/server'

// Insert or update the user in a Convex table then return the document's ID.
//
// The `UserIdentity.tokenIdentifier` string is a stable and unique value we use
// to look up identities.
//
// Keep in mind that `UserIdentity` has a number of optional fields, the
// presence of which depends on the identity provider chosen. It's up to the
// application developer to determine which ones are available and to decide
// which of those need to be persisted.
export default mutation(async ({ db, auth }): Promise<Id<'users'>> => {
  const identity = await auth.getUserIdentity()
  console.log(identity)
  if (!identity) {
    throw new Error('Called storeUser without authentication present')
  }

  const { tokenIdentifier, name, email, pictureUrl } = identity

  // Check if we've already stored this identity before.
  const user: Document | null = await db
    .query('users')
    .filter((q) => q.eq(q.field('tokenIdentifier'), tokenIdentifier))
    .first()
  if (user !== null) {
    // If we've seen this identity before but the profile info has changed, patch the value.
    if (
      user.name !== name ||
      user.email !== email ||
      user.pictureUrl !== pictureUrl
    ) {
      await db.patch(user._id, { name, email, pictureUrl })
    }
    return user._id
  }
  // If it's a new identity, create a new `User`.
  return db.insert('users', { tokenIdentifier, name, email, pictureUrl })
})