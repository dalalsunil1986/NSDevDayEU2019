export class Speaker {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;

  constructor(options: any) {
    this.id = options._id;
    this.name = options.name;
    this.title = options.title;
    this.bio = options.bio;
    this.image = options.image;
  }
}
