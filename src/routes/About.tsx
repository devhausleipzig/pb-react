import { useEffect, useState } from "react";

type FormValues = {
  firstName: string;
  lastName: string;
  saveLogin: boolean;
  favFruit: string;
  age: string;
};

type FormErrors = {
  firstName: string | null;
  lastName: string | null;
  saveLogin: string | null;
  favFruit: string | null;
  age: string | null;
};

const initialFormValues = {
  firstName: "",
  lastName: "",
  saveLogin: true,
  favFruit: "",
  age: "",
};

const initialErrors = {
  firstName: null,
  lastName: null,
  saveLogin: null,
  favFruit: null,
  age: null,
};

export default function About() {
  const [submissions, setSubmissions] = useState<FormValues[]>([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formValues.firstName) {
      setErrors({ ...errors, firstName: "Please provide a first name" });
      return;
    }
    if (formValues.firstName.length < 3) {
      setErrors({
        ...errors,
        firstName: "Your first name need to be at least 3 characters long",
      });
      return;
    }
    if (!formValues.lastName) {
      setErrors({ ...errors, lastName: "Please provide a last name" });
      return;
    }

    setSubmissions([...submissions, formValues]);
    setErrors(initialErrors);
    setFormValues(initialFormValues);
  }

  useEffect(() => {
    const savedSubmissions = localStorage.getItem("form");
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  useEffect(() => {
    if (submissions.length) {
      localStorage.setItem("form", JSON.stringify(submissions));
    }
  }, [submissions]);

  return (
    <div className="flex gap-8">
      <div>
        <h2 className="text-xl font-bold mb-12">Forms</h2>
        <form
          className="mb-6 flex flex-col items-start gap-3"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="First Name *"
            value={formValues.firstName}
            onChange={(event) => {
              setFormValues({ ...formValues, firstName: event.target.value });
              setErrors(initialErrors);
            }}
            type="text"
          />
          <p className="text-red-400">{errors.firstName}</p>
          <input
            placeholder="Last Name *"
            value={formValues.lastName}
            onChange={(event) => {
              setFormValues({ ...formValues, lastName: event.target.value });
              setErrors(initialErrors);
            }}
            type="text"
          />
          <p className="text-red-400">{errors.lastName}</p>

          <label className="flex gap-1 items-center">
            Save Login
            <input
              type="checkbox"
              checked={formValues.saveLogin}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  saveLogin: event.target.checked,
                })
              }
            />
          </label>
          <div>
            <h3> Favorite Fruit</h3>
            <div className="flex gap-3">
              <label>
                Apple
                <input
                  type="radio"
                  value="apple"
                  name="favFruit"
                  onChange={(event) =>
                    setFormValues({
                      ...formValues,
                      favFruit: event.target.value,
                    })
                  }
                />
              </label>
              <label>
                Banana
                <input
                  type="radio"
                  value="banana"
                  name="favFruit"
                  onChange={(event) =>
                    setFormValues({
                      ...formValues,
                      favFruit: event.target.value,
                    })
                  }
                />
              </label>
              <label>
                Pineapple
                <input
                  type="radio"
                  value="pineapple"
                  name="favFruit"
                  onChange={(event) =>
                    setFormValues({
                      ...formValues,
                      favFruit: event.target.value,
                    })
                  }
                />
              </label>
            </div>
          </div>
          <select
            placeholder="Age"
            value={formValues.age}
            onChange={(event) =>
              setFormValues({ ...formValues, age: event.target.value })
            }
          >
            <option value="">Not gonna say</option>
            <option value="10-16">10 - 16</option>
            <option value="17-25">17 - 25</option>
            <option value="26-99">26 - 99</option>
          </select>

          <button className="bg-slate-400 rounded py-1 px-2" type="submit">
            Submit
          </button>
        </form>
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </div>
      <aside>
        <h3 className="font-bold mb-8">Form submissions</h3>
        {submissions.map((sub, idx) => (
          <pre key={idx}>{JSON.stringify(sub, null, 2)}</pre>
        ))}
      </aside>
    </div>
  );
}
