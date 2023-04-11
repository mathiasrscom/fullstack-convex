import React, { useContext, type PropsWithChildren } from 'react'
import NextError from 'next/error'
import Link from 'next/link'
import Image from 'next/image'
import { BackendContext, DataContext } from '../context'
import { AppData, BackendEnvironment, User } from '../types'

function LogoutButton() {
  const backend = useContext(BackendContext) as BackendEnvironment
  const auth = backend.authentication

  if (!backend || !auth) {
    return (
      <NextError
        statusCode={500}
        title="No backend context provided!"
        withDarkMode={false}
      />
    )
  }

  return (
    <button className="dark" onClick={auth.logout}>
      Log out
    </button>
  )
}

function LoginButton() {
  const { authentication } = useContext(BackendContext) as BackendEnvironment
  const { user } = useContext(DataContext) as AppData
  return (
    <button
      className="dark"
      title="Log in"
      disabled={user.isLoading}
      onClick={authentication.login}
    >
      Log in
    </button>
  )
}

function LoginGhost() {
  return (
    <button className="ghost" title="Log out" disabled>
      Log out
    </button>
  )
}

export function Avatar({
  user,
  size = 30,
  withName = false,
}: {
  user: User
  size?: number
  withName?: boolean
}) {
  let firstName = user.name.split(' ')[0]
  if (firstName.indexOf('@') >= 0) {
    firstName = firstName.split('@')[0]
  }
  return (
    <div className="avatar">
      <Image
        src={user.pictureUrl}
        width={size}
        height={size}
        alt={user.name}
        title={user.name}
      />
      {withName && (
        <span className="avatar-name" title={user.name}>
          {firstName}
        </span>
      )}
    </div>
  )
}

export function NullAvatar() {
  return (
    <div className="avatar null-avatar">
      <div className="avatar-ghost"></div>
      <span className="avatar-name" title="No one">
        No one
      </span>
    </div>
  )
}

export function Login() {
  const data = useContext(DataContext) as AppData
  const { value: user, isLoading } = data.user
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      {user && <Avatar user={user} size={38} />}
      {isLoading ? ( //TODO fix flashing
        <LoginGhost />
      ) : !user ? (
        <LoginButton />
      ) : (
        <LogoutButton />
      )}
    </div>
  )
}

export function Header({ children }: PropsWithChildren) {
  return (
    <header>
      <Link href="/">
        <h1>Tasks</h1>
      </Link>
      {children}
      <Login />
    </header>
  )
}
