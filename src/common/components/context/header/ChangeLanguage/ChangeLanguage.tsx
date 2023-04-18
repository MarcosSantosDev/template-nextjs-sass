import { useRouter } from 'next/router';

import styles from './ChangeLanguage.module.scss';

function ChangeLanguage() {
  const {
    locales = [],
    locale: currentLocale = 'pt',
    push,
    pathname,
  } = useRouter();

  const handleChangeLanguage = (localeSelected: string) => {
    push(pathname, undefined, { locale: localeSelected });
  };

  return (
    <div
      key="changeLanguage"
      id="change-language"
      className={styles['group-btn']}
    >
      {locales.map(locale => (
        <button
          className={styles.btn}
          data-selected={locale === currentLocale}
          key={locale}
          type="button"
          onClick={() => handleChangeLanguage(locale)}
        >
          {locale.toLocaleUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default ChangeLanguage;
