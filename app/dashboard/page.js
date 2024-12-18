'use client'

import LogoutButton from '@/components/LogoutButton';
import { useSelector } from "react-redux";

export default function Dashboard() {
   const user = useSelector((state) => state.user.data);

   return (
      <div className="flex flex-col items-center h-screen gap-4 mt-20">
         <h1 className="text-2xl font-bold">Hello {user.name}!</h1>

            <div className="flex flex-col gap-2 bg-zinc-200 p-4 rounded-md text-zinc-800">

               { user?.id && (
                  <p className="text-sm">
                     <span className="font-bold">ID:</span> {user.id}
                  </p>
               )}

               { user?.sessionId && (
                  <p className="text-sm">
                     <span className="font-bold">Session ID:</span> {user.sessionId}
                  </p>
               )}

               { user?.name && (
                  <p className="text-sm">
                     <span className="font-bold">Name:</span> {user.name}
                  </p>
               )}

               { user?.username && (
                  <p className="text-sm">
                     <span className="font-bold">Username:</span> {user.username}
                  </p>
               )}

               { user?.email && (
                  <p className="text-sm">
                     <span className="font-bold">Email:</span> {user.email}
                  </p>
               )}

               { user?.roles?.length > 0 && (
                  <>
                     <hr className="w-full border-zinc-400" />
                     <div className="font-bold">Roles:</div>
                     <ul className="list-disc list-inside">
                        {user.roles.map((role) => (
                           <li key={role}>{role}</li>
                        ))}
                     </ul>
                  </>
               )}


            </div>

         <LogoutButton />
      </div>
   );
}