$(function () {
    
    var anim_id;

    // saving dom objects to variables
    var container = $('#container');
    var ball = $('#ball');
    var paddle = $('.paddle');
    var paddle_1 = $('#paddle_1');
    var paddle_2 = $('#paddle_2');
    var restart_btn = $('#restart_btn');

    // saving some initial setup
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var paddle_width = parseInt(paddle.width());
    var ball_height = parseInt(ball.height());
    var ball_width = parseInt(ball.width());
    
    // some other declarations
    var game_over = false;

    var ball_center;
    var paddle_center;

    var ball_go = 'down';
    var ball_right_left = 'right';

    var top = 6;
    var right_left_angle = 0;

    var move_right_p1 = false;
    var move_left_p1 = false;

    var move_right_p2 = false;
    var move_left_p2 = false;

    var who_won;


});