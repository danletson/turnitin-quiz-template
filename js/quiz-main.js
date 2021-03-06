

// array of correct answer objects, with the question number and response value.
var ca = [
    {
    "q":5,
    "r": "A"
    },{
    "q":6,
    "r": "C"
    },{
    "q":7,
    "r": "False"
    },{
    "q":8,
    "r": "True"
    },{
    "q":9,
    "r": "False"
    },{
    "q":10,
    "r": "True"
    },{
    "q":11,
    "r": "B"
    },{
    "q":12,
    "r": "A"
    },{
    "q":13,
    "r": "D"
    },{
    "q":14,
    "r": "C"
    },{
    "q":15,
    "r": "B"
    },{
    "q":16,
    "r": "C"
    },{
    "q":17,
    "r": "E"
    }
];


// array of explanation objects, with the question number and response value
var ex = [
    {
    "q":5,
    "e": "A plagiarist treats somebody else's work as though it were their own that he or she created. This is an act of stealing because that work is taken without permission and without giving the original writer due credit. It is fraud because the plagiarist is lying about who created the work."
    },{
    "q":6,
    "e": "Plagiarism is essentially taking an existing work and passing it off as original without crediting the source. Choice C is the only example that is not an example of plagiarism, as long as the citation is done correctly. (Source: Merriam-Webster Online Dictionary, Plagiarism.org)"
    },{
    "q":7,
    "e": "To show proper attribution, a writer must put quotation marks around the quoted passage and add a corresponding reference in MLA, APA, or any other format that is accepted. Just adding quotation marks around a paragraph is NOT enough."
    },{
    "q":8,
    "e": "An act of plagiarism is plagiarism, regardless of whether it was intentional or unintentional. Therefore, students are highly encouraged to check through and proofread their papers to make sure that every outside source is given proper citation."
    },{
    "q":9,
    "e": "Plagiarism is a major concern in many parts of society outside of the classroom. Novelists, journalists, scientists and researchers, business people and politicians are all susceptible to plagiarism, and the consequences can be harmful if they do. Proper citation in research studies, news articles, or reports intended to inform business and legislation allows people to confirm the information they receive and helps them avoid incorrect or ineffective decisions."
    },{
    "q":10,
    "e": "Plagiarism, and cheating in general, definitely harms others. Those who cheat gain unfair advantages that put honest people into positions of extra pressure and stress. Those whose materials have been plagiarized are also not being given their fair due or compensation."
    },{
    "q":11,
    "e": "Option A does NOT require citation since it is a case where one is writing ideas that are original. Since these ideas are being introduced for the first time in that work, and no where else, there is no other source to cite. <br><br> Option B requires citation. Passing off some of your previous writing as original, without citing the original work, is often called self-plagiarism, or duplication. A writer has the responsibility to indicate whether or not the material has been used before, particularly within scholarly or professional publishing."
    },{
    "q":12,
    "e":"Option A requires citation. Social sites still need to be cited or referenced, even if they are in the public domain and created by many people. If you take an idea or text from an outside source, you should properly cite it, no matter where it comes from. (Also, many instructors do not consider Wikipedia to be a reputable source, so do your research!) <br><br> Option B does not require citation because there is no need to cite common knowledge. The Purdue Online Writing Lab says that information can be considered common knowledge if it is “undocumented in at least five credible sources,” if it is something that readers within a group or discipline are likely to understand, and if it is contained in a general reference source. <br><br> <small>Source: <a href='https://owl.english.purdue.edu/owl/resource/589/02/' target='blank'>https://owl.english.purdue.edu/owl/resource/589/02/</a>"
    },{
    "q":13,
    "e": "Proper paraphrasing requires writing an original summary, and following it up with proper citation (i.e., using quotes and providing references according to an acceptable citation format). Options A and B show how paraphrasing is often misinterpreted. Changing every few words is also detected by plagiarism software! As Option C indicates, ideas that come from other sources require attribution, even if the text is completely changed."
    },{
    "q":14,
    "e": "Paper B in this situation is called a “secondary source.” Secondary sources should be used as sparingly as possible, and mostly in situations where the original source is inaccessible. In your citation, you will reference Paper A, followed by “as cited in Paper B,” providing proper attribution to both sources. However, if you only use information from Paper A, then you only need to cite that source."
    },{
    "q":15,
    "e": "Proper citation practices tell your audience the sources of your information and writing. Knowing your sources helps your readers better understand the arguments or positions you are making. They will compare your statements to what your sources have said, and determine how your writing relates to those sources. Proper citation also allows you to back up your positions, by providing additional evidence and arguments from your sources that have said similar things. Citation also allows your audience to confirm that what you are saying is, indeed, valid and true. Citation is used to provide appropriate credit to those you are relying upon to make your arguments, but it does not serve any formal royalties system (that happens in other ways)."
    },{
    "q":16,
    "e": "This is an example of both unethical collaboration and plagiarism. Individual assignments do not involve collaboration unless authorized by the instructor. A question that any writer should ask him or herself is: “Am I trying to pass off others’ work and taking credit for it as my own?” This situation becomes clear in that respect. Chi and Juan are passing off the research, the ideas and main findings as their own individual original work without providing attribution to the other."
    },{
    "q":17,
    "e":"These consequences demonstrate that plagiarism is a serious offense and should be avoided at all costs. There have been several journalists in recent history that have had their reputations ruined because they stole the work from others. This act of theft makes them look not credible, since it appears they can’t do their own work. In education, original work is of strong value and since plagiarism and cheating give those who do it an unfair advantage over other students, suspensions and expulsions are common consequences. Plagiarism can lead businesses and other organizations to make poor decisions, which may end up in loss of money or harm to individuals. Therefore, these organizations usually have a valid claim by which to sue or press charges against the plagiarists."
    }
];


// array of possible ranking objects, with the rank, explanation text, and text that will populate the Tweet if the results are shared via Twitter
var ranks = [
    {
        "rank": "Master",
        "exText": "Congratulations! You're a plagiarism expert!",
        "twitterText": "I'm a plagiarism Expert! Take the Turnitin plagiarism quiz",
    },{
        "rank": "Pro",
        "exText": "You’re a plagiarism pro! Here are some exercises to challenge you: <br> <ul><li><a href='http://plagiarism.arts.cornell.edu/tutorial/exercises.cfm' target='blank'>Cornell University Plagiarism Quiz</a></li><li><a href='http://www.clark.edu/Library/iris/quiz/plagiarism_quiz_home.php' target='blank'>Clark College Plagiarism Quiz</a></li></ul>",
        "twitterText": "I'm a plagiarism Pro! Take the Turnitin plagiarism quiz"
    },{
        "rank": "In-Training",
        "exText": "You’re still learning the ins and outs of plagiarism. Try these pages to learn more: <br> <ul><li><a href='http://en.writecheck.com/ways-to-avoid-plagiarism' target='blank'>WriteCheck Resource Center</a></li><li><a href='http://www.plagiarism.org/plagiarism-101/prevention' target='blank'>Plagiarism Prevention</a></li></ul>",
        "twitterText": "I took the Turnitin plagiarism quiz!"
    },{
        "rank": "Newbie",
        "exText": "You may be in danger of plagiarizing. Check out these pages for help: <br> <ul><li><a href='http://en.writecheck.com/plagiarism-guide' target='blank'>Plagiarism Guide</a></li><li><a href='http://www.plagiarism.org/plagiarism-101/what-is-plagiarism' target='blank'>What is Plagiarism?</a></li></ul>",
        "twitterText": "I took the Turnitin plagiarism quiz!"
    }

];

        // container for user-submitted answers, with slide ID and answer values.
        var answered = [];


        // function to submit the results to JotForm via a popup, so the user is re-directed back to the quiz to see their results.
        function submitPopup(url,w,h){
          var left = (screen.width/2)-(w/2);
          var top = (screen.height/4)-(h/4);
          newwindow =  window.open (url, 'title', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
          if (window.focus) {newwindow.focus()}
          return false;
          }


        function checkAnsweredStatus(inputToCheck){

                var answer = "";

                var slideID = inputToCheck.parent().parent().parent().parent().parent().parent().parent().attr('id').substr(6);
                // console.log(inputToCheck.parent().parent().parent().parent());
                if ($('.slide#slide_'+slideID).has($('input:checked')).length){
                    $('.fp-slidesNav a[data-id="'+slideID+'"]').attr("data-status", "answered");

                    $('.slide#slide_'+slideID+' input:checked').each(function(){
                        answer = $(this).attr('value');
                    });

                    answered = $.grep(answered, function(a){
                        return (a.question !== slideID);
                    });

                    answered.push(
                        {
                            "question": slideID,
                            "answer": answer
                        }
                    );

                } else {
                    $('.fp-slidesNav a[data-id="'+slideID+'"]').attr("data-status", "unanswered");
                    answered = $.grep(answered, function(a){
                        return (a.question !== slideID);
                    });

                }
                if (answered.length > 16){
                    console.log('enabled');
                    $('.form-submit-button').removeAttr('disabled');
                    $('#slide_18 .container h2').html('All done?');
                    $('#slide_18 .container h3').html('Submit your results, and see how you did!');
                } else {
                    $('.form-submit-button').attr('disabled', true);
                    $('#slide_18 .container h2').html('Whoops! Looks like you missed a question');
                    $('#slide_18 .container h3').html('Use the navigation at the bottom to skip back');
                }
                console.log(answered);
            }

            function showAnswers(){

                var totalScore = 0;

                var emailQuestionList = '';

                for (var i=0;i<ca.length;i++){
                    var questionIndex = ca[i].q;
                    var correctAnswer = ca[i].r;

                    if (answered[questionIndex-1].answer === correctAnswer){

                        $('#slide_'+(questionIndex)+' input').each(function(){
                            if ($(this).attr('value') === correctAnswer){
                                $(this).parent().addClass('correct');
                            }
                        });
                        totalScore += 1;
                        emailQuestionList += $('#slide_'+questionIndex).attr('data-question')+' : Correct\n';
                        $('#slide_'+(questionIndex)+' .container .mark').html('<div class="correct-callout">Correct!</div>');
                        $('.fp-slidesNav ul li a[data-id="'+(questionIndex)+'"]').attr('data-status', 'correct');

                    } else {

                        $('#slide_'+(questionIndex)+' input').each(function(){
                            if ($(this).attr('value') === correctAnswer){
                                $(this).parent().addClass('correct');
                            }
                        });
                        emailQuestionList += $('#slide_'+questionIndex).attr('data-question')+' : Incorrect\n';
                        $('#slide_'+(questionIndex)+' .container .mark').html('<div class="explanation-callout">'+ex[i].e+'</div>');
                        $('.fp-slidesNav ul li a[data-id="'+(questionIndex)+'"]').attr('data-status', 'incorrect');

                    }
                }

                $('.score h1').html(totalScore+'<span> / 13</span>');


                //breakdown of brackets, to determine ranks

                var bracket = 0;

                if (totalScore > 10){
                    bracket = 0;
                } else if (totalScore > 7){
                    bracket = 1;
                } else if (totalScore > 4){
                    bracket = 2;
                } else {
                    bracket = 3;
                }

                var timestamp = new Date();
                var date = timestamp.toDateString();
                var time = timestamp.toLocaleTimeString();

                // text that populates email if the quiz results are shared via email
                var emailText = "My quiz results:\n\n"+totalScore+" out of 13 questions correct.\n\nRank: "+ranks[bracket].rank+"\n\nAnswers:\n"+emailQuestionList+"\nCompleted: "+date+" "+time+'\n\nDownload the answer guide: http://go.turnitin.com/plagiarism-quiz-guide \n\nShare the quiz: http://go.turnitin.com/plagiarism-quiz';

                $('.results-container h2.rank').html(ranks[bracket].rank);
                $('.results-container .rank-explanation').html(ranks[bracket].exText);
                $('#twitter-link').attr('href', 'https://twitter.com/share?url=http%3A%2F%2Fgo.turnitin.com%2Fplagiarism-quiz&via=turnitin&hashtags=integrity&text='+encodeURIComponent(ranks[bracket].twitterText));
                $('#email-link').attr('href', 'mailto:Recipient?subject=Turnitin%20Plagiarism%20Quiz%20Results&body='+encodeURIComponent(emailText));
                $('#slide_18 .container').fadeOut(300, function(){
                    $('#slide_18 .results-container').fadeIn();
                    $('#slide_18 .review-answers').fadeIn();
                });
                $('input').each(function(){
                  $(this).attr('disabled', true);
                });

                return true;

            }

            $(document).ready(function(){

                $('.results-container').hide();
                $('.review-answers').hide();

                // fullpage setup
                $('#quiz').fullpage({
                    scrollingSpeed: 200,
                    slidesNavigation: true,
                    slidesNavPosition: 'bottom',
                    keyboardScrolling: true,
                    scrollOverflow: true,
                    css3: true,
                    easingcss3: 'ease',
                    verticalCentered: true,
                    controlArrows: true,

                    afterRender: function(){

                        $('.form-submit-button').attr('disabled', 'disabled');

                        $('input').each(function(){

                            // checkAnsweredStatus($(this));

                            $(this).change(function(){

                                checkAnsweredStatus($(this));

                                $('.form-submit-button:enabled').click(function(){
                                    setTimeout(function(){showAnswers();},300);
                                });

                            });
                        });

                        $('a.start').click(function(){
                            $.fn.fullpage.moveTo(2);
                        });
                        $('a.start-quiz').click(function(){
                            $.fn.fullpage.moveTo(3);
                        });



                    }
                });

                $.fn.fullpage.setAllowScrolling(false);

            });
