import Link from "next/link"



export default function UserNotFound() {
    return (
      <>
        <h1 className="text-2xl border-b pb-1 mb-1">
            Sorry! Error!
        </h1>
        <p className="text-2xl">
           Not Found
        </p>
        <p className="mt-8">
            <Link href="/" className="pt-4 text-blue-500 hover:text-gray-500">
                Back to Page
            </Link>
        </p>
      </>
    )
  }
  