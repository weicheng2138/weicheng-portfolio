import { Link } from 'react-router-dom';

type AnchorProps = React.ComponentPropsWithoutRef<'a'> & {
  isFile?: boolean;
};
const CustomLink = ({
  href,
  children,
  isFile = false,
  ...rest
}: AnchorProps) => {
  const isInternalLink = href && href.startsWith('/') && !isFile;
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink)
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  if (isAnchorLink)
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );

  if (href === undefined) {
    return <span className="text-red-600">There is no href right now</span>;
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  );
};

export default CustomLink;
