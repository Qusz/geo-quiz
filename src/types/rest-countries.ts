export interface RestCountries {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  independent: boolean;
  capital: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
}
