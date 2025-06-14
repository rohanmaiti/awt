import React, { useEffect, useState } from "react";

export const Propdriling = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setName("Rohan");
  }, []);

  return (
    <div>
      <Father name={name} setName={setName} />
    </div>
  );
};

function Father({ name, setName }: { name: string | null; setName: React.Dispatch<React.SetStateAction<string | null>> }) {
  return (
    <>
      <Son1 name={name} setName={setName} />
      <Son2 name={name} setName={setName} />
    </>
  );
}

function Son1({ name, setName }: { name: string | null; setName: React.Dispatch<React.SetStateAction<string | null>> }) {
  return (
    <>
      <Child11 name={name} setName={setName} />
      <Child12 name={name} setName={setName} />
    </>
  );
}

function Son2({ name, setName }: { name: string | null; setName: React.Dispatch<React.SetStateAction<string | null>> }) {
  return <Child21 name={name} setName={setName} />;
}

function Child11({ name }: { name: string | null; setName: React.Dispatch<React.SetStateAction<string | null>> }) {
  return (
    <>
      <h1>Child11 name Is {name}</h1>
    </>
  );
}

function Child12({ name }: { name: string | null; setName: React.Dispatch<React.SetStateAction<string | null>> }) {
  return (
    <>
      <h1>Child12</h1>
    </>
  );
}

function Child21({ name }: { name: string | null; setName: React.Dispatch<React.SetStateAction<string | null>> }) {
  return (
    <>
      <h1>Child21</h1>
    </>
  );
}
