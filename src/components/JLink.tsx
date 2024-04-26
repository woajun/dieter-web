import { ComponentProps } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

interface Props extends ComponentProps<typeof Link> {}

export const JLink = (props: Props) => {
  const { to } = props;
  const [sp] = useSearchParams();
  const lang = sp.get('lang');
  let destination = to;
  if (lang === 'eng') {
    destination = destination + '?lang=eng';
  }
  return <Link {...props} to={destination} />;
};
