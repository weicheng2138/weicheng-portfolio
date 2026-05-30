import Typography from './typography';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex h-14 w-full items-center justify-center bg-primary dark:bg-background">
      <Typography variant="span" className="text-gray01">
        © 2026 Wei-Cheng Hung. All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
