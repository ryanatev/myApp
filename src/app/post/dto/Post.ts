import { Mood } from '../../mood';
import { Comment } from '../../comment';

export class Post {
    user: Number;
    text: String;
    moods: Array<Mood>;
    comments: Array<Comment>;
}
