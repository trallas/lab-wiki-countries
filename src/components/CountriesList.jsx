import { Link } from 'react-router-dom';
const CountriesList = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <Link key={country.alpha3Code} to={`/countries/${country.alpha3Code}`}>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name}
          />
          {country.name}
        </Link>
      ))}
    </div>
  );
};

export default CountriesList;