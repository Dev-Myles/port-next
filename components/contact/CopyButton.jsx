import { AiOutlineCopy } from 'react-icons/ai';

export default function CopyButton() {
  return (
    <AiOutlineCopy
      onClick={() => navigator.clipboard.writeText('mylessworkemail@gmail.com')}
    />
  );
}
