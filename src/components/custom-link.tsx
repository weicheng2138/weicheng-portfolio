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

  const NoHrefComponent = () => {
    return <span className="text-red-600">There is no href right now</span>;
  };
  const ExternalLink = () => {
    return (
      <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
        {children}
      </a>
    );
  };

  return <>{href !== undefined ? <ExternalLink /> : <NoHrefComponent />}</>;
};

export default CustomLink;
