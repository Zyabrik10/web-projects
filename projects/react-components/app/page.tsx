"use client";

import { Disclosure } from "@/components";
import Input from "@/components/Input";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, quasi ullam reprehenderit, ipsum magnam quod, sed aliquid non modi tempore autem ea quae consectetur harum fugiat. Aliquam, sunt dolorum?",
  );
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  const [num, setNum] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <Disclosure title="Text Input">
        <h1 style={{ marginBottom: "10px" }}>Text Input</h1>
        <Input value={value} setValue={setValue} placeholder="Text..." />

        <h1 style={{ margin: "10px 0px" }}>Controlled width Text Input</h1>
        <Input placeholder="Text..." width="120px" />

        <h1 style={{ margin: "10px 0px" }}>Required Text Input</h1>
        <Input
          value={value}
          setValue={setValue}
          placeholder="Text..."
          required
        />

        <h1 style={{ margin: "10px 0px" }}>Labeled Text Input</h1>
        <Input
          value={value2}
          setValue={setValue2}
          placeholder="Text..."
          label="Login"
        />

        <h1 style={{ margin: "10px 0px" }}>
          Labeled Controlled width Text Input
        </h1>
        <Input
          placeholder="Text..."
          width="120px"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, quasi ullam reprehenderit, ipsum magnam quod, sed aliquid non modi tempore autem ea quae consectetur harum fugiat. Aliquam, sunt dolorum?"
        />

        <h1 style={{ margin: "10px 0px" }}>Required Labeled Text Input</h1>
        <Input
          value={value2}
          setValue={setValue2}
          placeholder="Text..."
          label="Login"
          required
        />

        <h1 style={{ margin: "10px 0px" }}>
          Required Labeled Controlled width Text Input
        </h1>
        <Input
          placeholder="Text..."
          width="120px"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, quasi ullam reprehenderit, ipsum magnam quod, sed aliquid non modi tempore autem ea quae consectetur harum fugiat. Aliquam, sunt dolorum?"
          required
        />

        <h1 style={{ margin: "10px 0px" }}>Overflow Text Input</h1>
        <Input
          value={value3}
          setValue={setValue3}
          placeholder="Text..."
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, quasi ullam reprehenderit, ipsum magnam quod, sed aliquid non modi tempore autem ea quae consectetur harum fugiat. Aliquam, sunt dolorum?"
          required
        />

        <h1 style={{ margin: "10px 0px" }}>Controlled on change</h1>
        <Input
          value={value4}
          onChange={(e) => setValue4(e.target.value as string)}
          placeholder="Text..."
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, quasi ullam reprehenderit, ipsum magnam quod, sed aliquid non modi tempore autem ea quae consectetur harum fugiat. Aliquam, sunt dolorum?"
          required
        />
        <span>Example. Write something {value4}</span>
      </Disclosure>

      <Disclosure title="Checkbox Input">
        <h1 style={{ marginBottom: "10px" }}>Checkbox Input</h1>
        <Input type="checkbox" value={num} setValue={setValue} size="30px" />

        <h1 style={{ marginBottom: "10px" }}>Checkbox Input with label</h1>
        <Input
          type="checkbox"
          value={num}
          setValue={setValue}
          label="Hello World"
          required
        />
      </Disclosure>

      <Disclosure title="Number Input" open>
        <h1 style={{ marginBottom: "10px" }}>Number Input</h1>
        <Input
          type="number"
          value={num}
          setValue={setNum}
          placeholder="Number..."
        />

        <h1 style={{ margin: "10px 0px" }}>Controlled width Number Input</h1>
        <Input type="number" placeholder="Number..." width="120px" />

        <h1 style={{ margin: "10px 0px" }}>Required Number Input</h1>
        <Input
          type="number"
          value={num}
          setValue={setNum}
          placeholder="Number..."
          required
        />

        <h1 style={{ margin: "10px 0px" }}>Labeled Number Input</h1>
        <Input
          type="number"
          value={num}
          setValue={setNum}
          placeholder="Number..."
          label="Login"
        />

        <h1 style={{ margin: "10px 0px" }}>
          Labeled Controlled width Number Input
        </h1>
        <Input
          type="number"
          placeholder="Number..."
          width="120px"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, quasi ullam reprehenderit, ipsum magnam quod, sed aliquid non modi tempore autem ea quae consectetur harum fugiat. Aliquam, sunt dolorum?"
        />

        <h1 style={{ margin: "10px 0px" }}>Required Labeled Number Input</h1>
        <Input
          type="number"
          value={num}
          setValue={setNum}
          placeholder="Number..."
          label="Login"
          required
        />

        <h1 style={{ margin: "10px 0px" }}>
          Required Labeled Controlled width Number Input
        </h1>
        <Input
          type="number"
          placeholder="Number..."
          width="120px"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, quasi ullam reprehenderit, ipsum magnam quod, sed aliquid non modi tempore autem ea quae consectetur harum fugiat. Aliquam, sunt dolorum?"
          required
        />

        <h1 style={{ margin: "10px 0px" }}>Overflow Number Input</h1>
        <Input
          type="number"
          value={num}
          setValue={setNum}
          placeholder="Number..."
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, quasi ullam reprehenderit, ipsum magnam quod, sed aliquid non modi tempore autem ea quae consectetur harum fugiat. Aliquam, sunt dolorum?"
          required
        />

        <h1 style={{ margin: "10px 0px" }}>Controlled on change</h1>
        <Input
          type="number"
          value={num}
          onChange={(e) => setValue4(e.target.value as string)}
          placeholder="Number..."
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, quasi ullam reprehenderit, ipsum magnam quod, sed aliquid non modi tempore autem ea quae consectetur harum fugiat. Aliquam, sunt dolorum?"
          required
        />
        <span>Example. Write something {value4}</span>
      </Disclosure>
    </div>
  );
}
