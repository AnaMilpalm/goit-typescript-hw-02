import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (
    values: { query: string },
    actions: { resetForm: () => void }
  ) => {
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <header className={s.header}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="query"
            placeholder="Search images..."
          />
          <button className={s.button} type="submit">
            Search images
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
