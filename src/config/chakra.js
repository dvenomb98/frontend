import { extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';

const { Drawer, Input, FormLabel, FormError, Form, Select, Checkbox, Radio, Alert, Textarea } =
  chakraTheme.components;

const theme = extendBaseTheme({
  styles: {
    global: () => ({
      body: {
        bg: '',
        color: '',
      },
    }),
  },
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  components: {
    Drawer,
    Input,
    FormLabel,
    FormError,
    Form,
    Select,
    Checkbox,
    Radio,
    Alert,
    Textarea,
  },
});

export default theme;
