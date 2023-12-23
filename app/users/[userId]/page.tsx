import { users } from "@/app/lib/users";
import Link from "next/link"
import { notFound } from "next/navigation";

interface Props {
    params: { userId: number };
}

export default function UserPage(props:Props) {
    const user = users[props.params.userId];
    if(user === undefined) {
        notFound();
    }

    return (
      <>
        <h1 className="text-2xl border-b pb-1 mb-1">
            {user.name}
        </h1>
        <p className="text-2xl">
            {user.prof}
        </p>
        <p className="mt-8">
            <Link href="/" className="pt-4 text-blue-500 hover:text-gray-500">
                Back to Page
            </Link>
        </p>
      </>
    )
  }
  