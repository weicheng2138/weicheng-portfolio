import Typography from './typography';

const Footer = () => {
  return (
    <footer className="flex h-[3.5rem] items-center justify-center bg-primary dark:bg-primary05">
      <Typography variant="span" className="text-gray01">
        © 2023 Wei-Cheng Hung. All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
