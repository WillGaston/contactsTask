"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Geo {
  alt: string,
  long: string
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}

interface Contact {
  id: id,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: Address,
  company: Company
}

function ContactCard(contact: Contact) {
  return (
    <div className={`p-4 max-w-sm rounded-xl shadow-md border`}>
      <h2 className="text-xl font-semibold text-gray-300">{contact.name}</h2>
      <p className="text-gray-400">username: <span className="text-white">{contact.username}</span></p>
      <p className="text-gray-400">email: <span className="text-white">{contact.email}</span></p>
      <p className="text-gray-400">phone: <span className="text-white">{contact.phone}</span></p>
      <p className="text-gray-400">website: <span className="text-white">{contact.website}</span></p>
    </div>
  );
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: Contact[]) => {
        setContacts(data);5
      });
  }, []);

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <div className='py-16 mx-auto text-center flex flex-col items-center'>
        <h1 className='text-6xl font-bold font-mono tracking-tighter text-white'>
          Contacts
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pb-52">
                {contacts.map((contact) => (
                    <motion.a
                        key={contact.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        //className="w-full"
                        target="_blank"
                        className="block rounded-lg shadow-lg bg-gray-800 p-4 transition-transform duration-300 ease-in-out"
                    >
                        <ContactCard {...contact} />
                    </motion.a>
                ))}
            </div>
    </div>
  );

}