import { useRouter } from 'next/router';

function ChangeLanguage() {
  const { locales = [], push, pathname } = useRouter();

  const handleChangeLanguage = (localeSelected: string) => {
    push(pathname, undefined, { locale: localeSelected });
  };

  return (
    <div key="changeLanguage">
      <span>Selecione o idioma: </span>
      {locales.map(locale => (
        <button key={locale} type="button" onClick={() => handleChangeLanguage(locale)}>
          {locale === 'pt' ? 'Portugues' : 'Inglês'}
        </button>
      ))}
    </div>
  );
}

export default ChangeLanguage;
