import { Link } from 'react-router-dom';

type AnchorProps = React.ComponentPropsWithoutRef<'a'>;
const CustomLink = ({ href, children, ...rest }: AnchorProps) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink)
    return (
      <Link to={href} className="font-notoSans" {...rest}>
        {children}
      </Link>
    );
  if (isAnchorLink)
    return (
      <a href={href} {...rest} className="font-notoSans">
        {children}
      </a>
    );

  const NoHrefComponent = () => {
    return <span className="text-red-600">There is no href right now</span>;
  };
  const ExternalLink = () => {
    const isGithub = href?.includes('github.com');
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="font-notoSans"
        href={href}
        {...rest}
      >
        {children}
        {/* {typeof children === 'undefined' && */}
        {/*   (isGithub ? <LinkIcon kind="github" /> : <LinkIcon />)} */}
      </a>
    );
  };

  return <>{href !== undefined ? <ExternalLink /> : <NoHrefComponent />}</>;
};

export default CustomLink;
