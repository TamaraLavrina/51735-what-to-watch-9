import MainScreen from '../main-screen/main-screen';

type Props = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
};

function App({ filmCardTitle, filmCardGenre, filmCardYear }: Props) {
  return (
    <MainScreen
      filmCardTitle={filmCardTitle}
      filmCardGenre={filmCardGenre}
      filmCardYear={filmCardYear}
    />
  );
}

export default App;
