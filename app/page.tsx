
import Link from "next/link"
import { users } from "./lib/users"

export default function Home() {
  const userItems = users.map(user => {
    return (
      <li key={user.id}>
        <Link href={`/users/${user.id}`} className="text-gray-500 hover:text-red-500">
          {user.name}
        </Link>
      </li>
    );
  });

  return (
    <>
      <h1 className="text-2xl border-b pb-1 mb-1">Users</h1>
      <ul className="text-lg list-disc ml-4">
        {userItems}
      </ul>
    </>
  )
}
