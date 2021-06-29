$("document").ready(function ()
{
    var foo=" ~ ";


$('#terminal').terminal(function(command, term) {
    var arr=command.trim().split(" "),
        directories=["About","Tech-Skills","Projects","Contact"];
        text=['Name : Akash Sharma\nDOB  : May 31 2000\n\nI build things. Mostly during camping in front of the screen for a real long time. And usually, with a Coffee Mug in hand (can be == empty). I believe programs can have deep beauty and elegance, just like poems. The fascination for computers has been since I was in 1st grade, when I got my first\ncomputer as a birthday gift.\n\nTags : | All Things Tech | ,| Competitive Programming | ,| Stack Overflow | , | Open-Source | , | Quora | , | Food | , | Music | , | Gaming |',
        'Languages used :C++/C, Java, Python, HTML, CSS, JavaScript, R, Latex, MongoDB, MySQL , Shell \n Field of Interests: Competitive Programming, Full Stack Web Development, Android Development, Web Scrapping, Database Management, SEO, Qualitative & Quantitative Research Methodologies, Machine Learning, Data Analysis',
        'Projects : TweepyModi,Secure Public ChatRoom, ReminiChair, S.A.H.A, Dash-College , Slithering.io',
        'Stack Overflow : https://stackoverflow.com/users/8845291/akash-sharma \nGithub         : https://github.com/Akash-Sharma-1\nFacebook       : https://www.facebook.com/profile.php?id=100020300898559\nInstagram      : https://www.instagram.com/akashthegreat/\nTwitter        : https://twitter.com/AkashTheGreat_1\nMail           : akashthegreatlegend@gmail.com'];

    switch(arr[0].toString().toLowerCase()){
        case 'help':
            term.echo("help            : Displays This Menu\nls              : List Directory Contents\ncd              : Change Directory\nview __filename : View the contents of __filename\nhtml __name     : Go to the respective section on this page\nclear           : Clear the screen\nblog            : Open Blog\n\n\n&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608; All of the parameters to commands are case sensitive &#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;\n");
            break;
        case 'ls':
            if(arr[1]!=null)
                if(directories.indexOf(arr[1]) > -1 && foo == ' ~ ')
                    term.echo(arr[1]+'.txt\n');
                else
                    term.echo("ls: no such file or directory: "+arr[1]+"\nUsage : ls __dirname     : List Directory Contents\n");
            else if(foo==' ~ ')
                term.echo(directories.join("\t")+"\n");
            else
                term.echo(foo+".txt\n");
            break;
        case 'cd':
            if(arr[1]!=null)
                if(arr[1]=="~" || arr[1]=="..")
                    foo=' ~ ';
                else if(directories.indexOf(arr[1]) > -1 && foo== ' ~ ')
                    foo=arr[1];
                else                    
                    term.echo("cd: no such file or directory: "+arr[1]+"\n");     
            else
               foo=' ~ '
            break;
        case 'html':
            if(arr[1]!=null)
              if(directories.indexOf(arr[1]) == -1)
                    term.echo("html: no such section : "+arr[1]+"\nLook at the navigation bar for the sections.\n");     
                else
                {  
                    let x='';
                    if(arr[1]==='About') x='about';
                    if(arr[1]==='Tech-Skills') x='interests';
                    if(arr[1]==='Projects') x='work';
                    if(arr[1]==='Contact') x='contact';


                    $("#"+x).get(0).scrollIntoView();
                    arr[1]="";
                }
            else
               term.echo('Usage : html __name     : Go to the respective section on this page\n');
            break;
        case 'view':
            if(arr[1]!=null)
            {
                var input=arr[1].split(".");    
                if(directories.indexOf(input[0]) > -1 && input[1] == 'txt' && foo==input[0])
                    term.echo("\n&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608; "+arr[1]+" &#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;\n\n"+text[directories.indexOf(input[0])]+"\n");
                else
                    term.echo("view: no such file : "+arr[1]+"\nUsage : view __filename : View the contents of __filename\n");
            } else 
                term.echo("Usage : view __filename : View the contents of __filename\n");
            break;
        case 'blog':
            term.echo('Opening Blog...\n');
            setTimeout(function(){                
                window.location.href='https://saturdaynighttechnobar.wordpress.com/';
            },1000);
            break;
        default: 
            term.echo("sh: command not found: "+arr[0]);
    }
    $(".prompt").html('&rarr; '+foo+'&nbsp');
   }, { prompt: '&rarr; ~ ', name: 'test' });
    $(".terminal-output").html("Type \"help\" for more information.");
    $("#Contact br").addClass('hidden-xs');
});