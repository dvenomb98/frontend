import classNames from 'classnames';
import { FC } from 'react';

export interface SvgProps {
  props?: React.SVGProps<SVGSVGElement>;
  className?: string;
}

const Instagram: FC<SvgProps> = ({ className, props }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={classNames(className, 'fill-[#db2777]')}
  >
    <path d="M12.022 6.844a5.135 5.135 0 0 0-5.134 5.134 5.106 5.106 0 0 0 5.134 5.134 5.135 5.135 0 0 0 5.134-5.134c0-2.813-2.321-5.134-5.134-5.134Zm0 8.482a3.344 3.344 0 0 1-3.348-3.348c0-1.83 1.473-3.304 3.348-3.304a3.296 3.296 0 0 1 3.304 3.304c0 1.875-1.473 3.348-3.304 3.348Zm6.518-8.66a1.2 1.2 0 0 0-1.205-1.206 1.2 1.2 0 0 0-1.206 1.205 1.2 1.2 0 0 0 1.206 1.206 1.2 1.2 0 0 0 1.205-1.206Zm3.393 1.205c-.09-1.608-.446-3.036-1.607-4.197-1.16-1.16-2.59-1.518-4.197-1.607-1.651-.09-6.607-.09-8.258 0-1.608.09-2.992.446-4.197 1.607-1.16 1.16-1.518 2.59-1.607 4.197-.09 1.651-.09 6.607 0 8.258.09 1.608.446 2.991 1.607 4.197 1.205 1.16 2.59 1.518 4.197 1.607 1.651.09 6.607.09 8.258 0 1.608-.09 3.036-.446 4.197-1.607 1.16-1.206 1.518-2.59 1.607-4.197.09-1.651.09-6.607 0-8.258Zm-2.143 10c-.312.892-1.027 1.562-1.875 1.92-1.34.535-4.464.401-5.893.401-1.473 0-4.598.134-5.893-.402a3.385 3.385 0 0 1-1.92-1.92c-.535-1.294-.401-4.42-.401-5.892 0-1.429-.134-4.554.402-5.893A3.443 3.443 0 0 1 6.13 4.21c1.294-.536 4.42-.402 5.892-.402 1.429 0 4.554-.134 5.893.402.848.312 1.518 1.027 1.875 1.875.536 1.34.402 4.464.402 5.893 0 1.473.134 4.598-.402 5.893Z" />
  </svg>
);

export default Instagram;