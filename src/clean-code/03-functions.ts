(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  function getActorBioById(ActorId: string) {
    console.log({ ActorId });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({ cast, description, rating, title }: Movie) {
    console.log({
      cast,
      description,
      rating,
      title,
    });
  }

  function checkFullName(fullName: string): boolean {
    return fullName ? true : false;
  }

  function createActor(fullName: string, birthDate: Date): boolean {
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }
})();
