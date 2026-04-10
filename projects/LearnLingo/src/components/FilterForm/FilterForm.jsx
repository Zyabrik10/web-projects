import { useState } from 'react';
import css from './FilterForm.module.css';
import FormInput from './components/FormInput/FormInput';

const langs = ['French', 'English'];
const prices = [10, 20, 30, 40, 50, 60];
const levels = [
  'A1 begginer',
  'A2 begginer',
  'b1 begginer',
  'b2 begginer',
  'c1 begginer',
  'c2 begginer',
];

export default function FilterForm() {

  const [language, setLanguage] = useState(langs[0]);
  const [level, setLevel] = useState(levels[0]);
  const [price, setPrice] = useState(prices[0]);

  return (
    <form className={css['form']}>
      <FormInput
        label="Languages"
        selectors={langs}
        setText={setLanguage}
        value={language}
        maxwidth={221}
      />
      <FormInput
        label="Level of knowledge"
        selectors={levels}
        setText={setLevel}
        value={level}
        maxwidth={198}
      />
      <FormInput
        label="Price"
        selectors={prices}
        setText={setPrice}
        value={price}
        maxwidth={124}
      />
    </form>
  );
}
