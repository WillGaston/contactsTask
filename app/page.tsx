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
      <h2 className="text-xl font-semibold text-gray-800">{contact.name}</h2>
      <p className="text-black">username: {contact.username}</p>
      <p className="text-black">email: {contact.email}</p>
      <p className="text-black">phone: {contact.phone}</p>
      <p className="text-black">website: {contact.website}</p>
    </div>
  );
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: Contact[]) => {
        setContacts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <div className='py-16 mx-auto text-center flex flex-col items-center'>
        <h1 className='text-6xl font-bold font-mono tracking-tighter text-gray-800'>
          Contacts
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pb-52">
                {contacts.map((contact) => (
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full"
                        target="_blank"
                    >
                        <ContactCard {...contact} />
                    </motion.a>
                ))}
            </div>
    </div>
  );

}