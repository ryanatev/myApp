import { Component, OnInit } from '@angular/core';
import { UserService } from './user/services/user.service';
import { PostService } from './post/services/post.service';
import { LoginService } from './login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  users: Array<any>;
  posts: Array<any>;
  post: any = {};
  login: any = {};
  postSuccess: any;
  loginSuccess: any;

  constructor(private userService: UserService, private postService: PostService, private loginService: LoginService) {
  }

  ngOnInit() {

    this.userService.getUsers().subscribe((response: any) => {
      this.users = response;
      console.log(this.users);
    }, error => {
      console.log(error);
    });

    this.postService.getPosts().subscribe((response: any) => {
      this.posts = response;
      console.log(this.posts);
    }, error => {
      console.log(error);
    });
  }

  onSubmit(post:any) { 
    let x = 3;
    this.postService.createPost(post).subscribe((response: any) => {
      this.postSuccess = response;
      console.log(this.postSuccess);
    }, error => {
      console.log(error);
    });
   }

   loginUser(login:any) { 
    let x = 3;
    this.loginService.login(login).subscribe((response: any) => {
      this.loginSuccess = response;
      console.log(this.loginSuccess);
    }, error => {
      console.log(error);
    });
   }

  //  this.heroesService.addHero(newHero)
  // .subscribe(hero => this.heroes.push(hero));

}
