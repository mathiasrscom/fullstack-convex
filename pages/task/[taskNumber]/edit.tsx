import React from 'react'
import Error from 'next/error'
import { useQuery } from '../../../convex/_generated/react'
import { HeaderWithLogin } from '../../../components/login'
import { EditableTaskDetails } from '../../../components/taskDetails'
import { Task } from '../../../convex/getTask'

export default function EditTaskPage({ taskNumber }: { taskNumber: number }) {
  const user = useQuery('getCurrentUser')
  const task = useQuery('getTask', taskNumber) as Task

  if (task === null) return <Error statusCode={404} title="Task not found" />

  if (task) {
    const isOwner = user && task && user._id.equals(task.ownerId)

    if (!isOwner)
      return (
        <Error
          statusCode={403}
          title="You do not have permission to edit this task"
        />
      )

    return (
      <main>
        <HeaderWithLogin user={user} />
        <EditableTaskDetails
          user={user}
          mutationName="updateTask"
          initialTaskInfo={task}
        />
      </main>
    )
  }
}

export async function getServerSideProps({
  params,
}: {
  params: { taskNumber: number }
}) {
  // Capture the dynamic route segment [taskNumber] (trickier to do client side)
  const { taskNumber } = params
  return {
    props: { taskNumber: +taskNumber },
  }
}
