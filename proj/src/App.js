import './App.css';
import React , { useState} from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';

function App() {
const [value, setValue] = useState({ name: '', email: '' });

  return (
    <div className="App">
  <Box fill align="center" justify="center">
    <Box width="medium" border="all" round="small" pad="20px">
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onSubmit={({ value: nextValue }) => console.log(nextValue)}
      >
        <FormField
          htmlFor="name"
          label="Name"
          name="name"
          required
          align="start"
        >
          <TextInput
            placeholder="Name"
            aria-required
            id="name"
            name="name"
            type="text"
            
          />
        </FormField>

        <FormField
          htmlFor="email"
          label="Email"
          name="email"
          required
          align="start"
        >
          <TextInput
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            fill="horizontal"     // 👈 full width
          />
        </FormField>

        {/* {message && (
          <Box pad={{ horizontal: 'small' }}>fad
            <Text color="status-error">{message}</Text>
          </Box>
        )} */}

        <Box direction="row" justify="between" margin={{ top: "medium" }}>
          <Button
            onClick={() => setValue({ name: "", email: "" })}
            type="reset"
            label="Reset"
          />
          <Button type="submit" label="Submit" primary />
        </Box>
      </Form>
    </Box>
  </Box>
</div>

  );
}

export default App;
