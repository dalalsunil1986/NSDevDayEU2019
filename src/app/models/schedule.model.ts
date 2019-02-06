export class Schedule {
  id: number;
  time: string;
  talk: boolean;
  title: string;
  text?: string;
  description?: string;
  speaker?: number;
  speakerDetails?: any;

  constructor(options: any) {
    this.id = options._id;
    this.time = options.tiime;
    this.talk = options.talk;
    this.title = options.title;
    this.text = options.text;
    this.description = options.description;
    this.speaker = options.speaker;
    this.speakerDetails = options.speakerDetails;
  }
}
