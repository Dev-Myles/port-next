import Image from 'next/image';

export default function LoadingGif() {
  const styling = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={styling}>
      <Image
        src="/images/loading.svg"
        alt="Loading gif"
        height="70px"
        width="70px"
        layout="fixed"
      />
    </div>
  );
}
