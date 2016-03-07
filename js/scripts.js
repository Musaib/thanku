(function(){
    //get the background-color for each tile and apply it as background color for the cooresponding screen
    $('.tile').each(function(){
        var $this= $(this),
            page = $this.data('page-name'),
            bgcolor = $this.css('background-color'),
            textColor = $this.css('color');
            
            //if the tile rotates, we'll use the colors of the front face
            if($this.hasClass('rotate3d')) {
              frontface = $this.find('.front');
              bgcolor = frontface.css('background-color');
              textColor = frontface.css('color');
            }

            //if the tile has an image and a caption, we'll use the caption styles
            if($this.hasClass('fig-tile')) {
              caption = $this.find('figcaption');
              bgcolor = caption.css('background-color');
              textColor = caption.css('color');
            }

        $this.on('click',function(){
          $('.'+page).css({'background-color': bgcolor, 'color': textColor})
                     .find('.close-button').css({'background-color': textColor, 'color': bgcolor});
        });
    });

	$(document).ready(function() {
		// Know More Button
		$('.know-more').click(function(){
			bootbox.alert({
				size: 'large',
				title: "About Our Concept",
				message: "Our lives these days is moving at a pace we find difficult to catch up with. In this frantic, ever escaping rush, we may easily forget the importance of gratitude. The hardest heart may be melted by a simple but sincere word of thanks. Sometimes we forget that a kind word, whether written or said aloud, has the power to change someone's day, even make that person smile.Following this concept of spreading smiles, we believe expressing gratefulness is a must. In this world of smartphones, a personalised note of thanks could do wonders. Small and concise, yet strong enough to strike a chord, our 'ThankU' card reaches out to all those people who touch your life in a small or big way every single day. This business-card sized note is convenient to hand out when needed. Silent gratitude isn't much of use to anyone. What are you waiting for? Go ahead, and start creating this chain of happiness!"
			});
			return false;
		});
		
		// Terms & Condition
		$('#terms').click(function(){
			var terms = "<p>Last revision: [01-feb-2016]</p>";
			terms += "<p>Please read this terms of service agreement carefully. By using this website you agree to be bound by all of the terms and conditions of this agreement.</p>";
			terms += '<p>This Terms of Service Agreement (the "Agreement") governs your use of this website, www.idothanku.com (the "Website"). This Agreement includes, and incorporates by this reference, the policies and guidelines referenced below. IdoThankU reserves the right to change or revise the terms and conditions of this Agreement at any time by posting any changes or a revised Agreement on this Website. IdoThankU will alert you that changes or revisions have been made by indicating on the top of this Agreement the date it was last revised. The changed or revised Agreement will be effective immediately after it is posted on this Website. Your use of the Website following the posting any such changes or of a revised Agreement will constitute your acceptance of any such changes or revisions. IdoThankU encourages you to review this Agreement whenever you visit the Website to make sure that you understand the terms and conditions governing use of the Website. This Agreement does not alter in any way the terms or conditions of any other written agreement you may have with IdoThankU for other products or services. If you do not agree to this Agreement (including any referenced policies or guidelines), please immediately terminate your use of the Website.</p>';
			terms += '<h2>WEBSITE</h2>';
			terms += '<p>Content; Intellectual Property; Third Party Links. In addition to making Products available, this Website also offers information and marketing materials. This Website also offers information, both directly and through indirect links to third-party websites. IdoThankU does not always create the information offered on this Website; instead the information is often gathered from other sources. You acknowledge that your use of the content on this Website is for personal, noncommercial use. Any links to third-party websites are provided solely as a convenience to you.</p>';
			terms += '<p>Use of Website; IdoThankU is not responsible for any damages resulting from use of this website by anyone. You will not use the Website for illegal purposes. You will (1) abide by all applicable local, state, national, and international laws and regulations in your use of the Website (including laws regarding intellectual property), (2) not interfere with or disrupt the use and enjoyment of the Website by other users, (3) not resell material on the Website, (4) not engage, directly or indirectly, in transmission of "spam", chain letters, junk mail or any other type of unsolicited communication, and (5) not defame, harass, abuse, or disrupt other users of the Website</p>';
			terms += '<p>License. By using this Website, you are granted a limited, non-exclusive, non-transferable right to use the content and materials on the Website in connection with your normal, noncommercial, use of the Website. You may not copy, reproduce, transmit, distribute, or create derivative works of such content or information without express written authorization from IdoThankU or the applicable third party (if third party content is at issue).</p>';
			terms += '<p>Posting. By posting, storing, or transmitting any content on the Website, you hereby grant IdoThankU a perpetual, worldwide, non-exclusive, royalty-free, assignable, right and license to use, copy, display, perform, create derivative works from, distribute, have distributed, transmit and assign such content in any form, in all media now known or hereinafter created, anywhere in the world. IdoThankU does not have the ability to control the nature of the user-generated content offered through the Website. You are solely responsible for your interactions with other users of the Website and any content you post. IdoThankU is not liable for any damage or harm resulting from any posts by or interactions between users. IdoThankU reserves the right, but has no obligation, to monitor interactions between and among users of the Website and to remove any content IdoThankU  deems objectionable.</p>';
			terms += '<h2>DISCLAIMER OF WARRANTIES</h2>';
			terms += '<p>Your use of this website is at your sole risk. This website is provided "as is" without any representations or warranties, express or implied. IdoThankU makes no representations or warranties in relation to this website or the information and materials provided on this website.</p>';
			terms += '<p>Without prejudice to the generality of the foregoing paragraph, IdoThankU does not warrant that:</p>';
			terms += '<p>This website will be constantly available, or available at all; or<br />';
			terms += 'The information on this website is complete, true, accurate or non-misleading.</p>';
			terms += '<p>Without prejudice to the generality of the foregoing paragraph, IdoThankU does not warrant that:</p>';
			terms += '<p>Nothing on this website constitutes, or is meant to constitute, advice of any kind.</p>';
			terms += '<h2>LIMITATION OF LIABILITY</h2>';
			terms += '<p>IdoThankU will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:</p>';
			terms += '<p>[To the extent that the website is provided free-of-charge, for any direct loss;]<br />';
			terms += 'For any indirect, special or consequential loss; or<br />';
			terms += 'For any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data</p>';
			terms += '<p>These limitations of liability apply even if idothanku has been expressly advised of the potential loss.</p>';
			terms += '<h2>INDEMNIFICATION</h2>';
			terms += "<p>You will release, indemnify, defend and hold harmless IdoThankU, and any of its contractors, agents, employees, officers, directors, shareholders, affiliates and assigns from all liabilities, claims, damages, costs and expenses, including reasonable attorneys' fees and expenses, of third parties relating to or arising out of (1) this Agreement or the breach of your warranties, representations and obligations under this Agreement; (2) the Website content or your use of the Website content; (3) the Products or your use of the Products (including Trial Products); (4) any intellectual property or other proprietary right of any person or entity; (5) your violation of any provision of this Agreement; or (6) any information or data you supplied to IdoThankU. </p>";
			terms += '<h2>PRIVACY</h2>';
			terms += '<p>IdoThankU believes strongly in protecting user privacy. Please refer to IdoThankU privacy policy, incorporated by reference herein, that is posted on the Website.</p>';
			terms += '<h2>AGREEMENT TO BE BOUND</h2>';
			terms += '<p>By using this Website, you acknowledge that you have read and agree to be bound by this Agreement and all terms and conditions on this Website.</p>';
			terms += '<h2>GENERAL</h2>';
			terms += '<p>Force Majeure. IdoThankU will not be deemed in default hereunder or held responsible for any cessation, interruption or delay in the performance of its obligations hereunder due to earthquake, flood, fire, storm, natural disaster, act of God, war, terrorism, armed conflict, labor strike, lockout, or boycott.</p>';
			terms += '<p>Cessation of Operation. IdoThankU may at any time, in its sole discretion and without advance notice to you, cease operation of the Website.</p>';
			terms += '<p>Entire Agreement. This Agreement comprises the entire agreement between you and IdoThankU and supersedes any prior agreements pertaining to the subject matter contained herein.</p>';
			terms += "<p>Effect of Waiver. The failure of IdoThankU to exercise or enforce any right or provision of this Agreement will not constitute a waiver of such right or provision. If any provision of this Agreement is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of this Agreement remain in full force and effect.</p>";
			terms += "<p>Governing Law; This Agreement shall be construed and governed by the substantive laws of India and the competent courts of Mumbai shall have exclusive jurisdiction in case of any dispute of enforcement.</p>";
			terms += "<p>Waiver of class action rights. By entering into this agreement, you hereby irrevocably waive any right you may have to join claims with those of other in the form of a class action or similar procedural device. Any claims arising out of, relating to, or connection with this agreement must be asserted individually.</p>";
			terms += "<p>Termination. IdoThankU reserves the right to terminate your access to the Website if it reasonably believes, in its sole discretion, that you have breached any of the terms and conditions of this Agreement. If your access to the Website is terminated, IdoThankU reserves the right to exercise whatever means it deems necessary to prevent unauthorized access of the Website. This Agreement will survive indefinitely unless and until IdoThankU chooses, in its sole discretion and without advance to you, to terminate it.</p>";
			terms += "<p>By using this website you agree to be bound by all of the terms and conditions of this agreement.</p>";
			
			bootbox.alert({
				size: 'large',
				title: "Terms & Conditions",
				message: terms
			});
			return false;
		});
		
		// Know More Button
		$('#policy').click(function(){
			bootbox.alert({
				size: 'large',
				title: "Privacy Policy",
				message: "<p>This Privacy Policy applies to the www.idothanku.com</p> <p>www.idothanku.com recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on http://www.idothanku.com and other online sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy.</p> <p>Information we collect</p> <p>Contact information. We might collect your name, email, mobile number, phone number, street, city, state, pincode, country and IP address.</p> <p>Information you post. We collect information you post in a public space on our website or on a third-party social media site belonging to www.idothanku.com</p> <p>Demographic information. We may collect demographic information about you, events you like, events you intend to participate in, feedback, or any other information provided by your during the use of our website. We might collect this as a part of a survey also.</p> <p>Other information. If you use our website, we may collect information about your IP address and the browser you're using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.</p> <p>We collect information in different ways.</p> <p>We collect information directly from you. We collect information directly from you when you register for to our website. We also collect information if you post a comment / feedback / contact us on our websites or ask us a question through website or email or social media or phone.</p> <p>We get information about you from third parties. For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address or other information.</p> <p>Use of your personal information</p> <p>We use information to contact you: We might use the information you provide to contact you.</p> <p>We use information to respond to your requests or questions. We might use your information to confirm your registration for an event or contest.</p> <p>We use information to improve our products and services. We might use your information to customize your experience with us. This could include displaying content based upon your preferences.</p> <p>We use information to look at site trends and customer interests. We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.</p> <p>We use information for security purposes. We may use information to protect our company, our customers, or our websites.</p> <p>We use information for marketing purposes. We might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting.</p> <p>We use information to send you transactional communications. We might send you emails or SMS about your activity.</p> <p>We use information as otherwise permitted by law.</p> <p>Sharing of information with third-parties</p> <p>We will share information with third parties who perform services on our behalf. We share information with vendors who help us manage our online registration process or transactional message processors. Some vendors may be located outside of India.</p> <p>We may share information if we think we have to in order to comply with the law or to protect ourselves. We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we might also share information when we are investigating potential fraud.</p> <p>We may share information with any successor to all or part of our business. For example, if part of our business is sold we may give our customer list as part of that transaction.</p> <p>We may share your information for reasons not described in this policy. We will tell you before we do this.</p> <p>Third party sites</p> <p>If you click on one of the links to third party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third party sites.</p> <p>If you have any questions about this Policy or other privacy concerns, you can also email us at <a href="+'"connect@idothanku.com"'+">connect@idothanku.com</a></p> <p>Updates to this policy</p> <p>This Privacy Policy was last updated on 01.02.2016. From time to time we may change our privacy practices. We will notify you of any material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates.</p> <p>Jurisdiction</p> <p>If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and the website's terms of use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India.</p>"
			});
			return false;
		});
	
		// Submit Form
		$('#feedback-submit').click(function() {
			var name = $('input[name=name]').val();
			var email= $('input[name=email]').val();
			var message = '';
			$('input[name="message\\[\\]"]').each(function() {
				message = $(this).val() + '\n' + message;
			});
			
			if(name === '') {
				bootbox.alert({
					title: "Error",
					message: "Please Enter Name"
				});
				return false;				
			}
			
			if(message === '') {
				bootbox.alert({
					title: "Error",
					message: "Please Enter Message"
				});
				return false;				
			}
			
			var subject = 'You have new message from ' + name;
			var body = 'Name: ' + name + '\n';
			if (email !== '') {
				body += 'Email: ' + email + '\n';
			}			
			body += 'Message: ' + message;

			$('#feedback-form').ajaxSubmit({
				url: 'mail.php',
				type: "POST",
				data: {'body': body, 'subject': subject},
				beforeSubmit: function() {
					$.blockUI({
						css: {
							border: 'none',
							padding: '15px',
							backgroundColor: '#000',
							'-webkit-border-radius': '10px',
							'-moz-border-radius': '10px',
							opacity: .5,
							color: '#fff'
						}
					});
				},
				success: function(result) {
					var response = $.parseJSON(result);
					if(!response['success']) {
						bootbox.alert({
							title: 'Error',
							message: response['message']
						});
					}
					else {
						bootbox.alert({
							title: 'Thank You',
							message: response['message']
						});
					}
				},
				complete: function() {
					$.unblockUI();
				},
			});
			
			return false;
		});
	});

})();

// $(window).load(function(){ 
//     var winView = $(window).width();
//     var tileCol = winView/4;
//     $('.bg-cards').css({ 'width': winView });
//     $('.tiles>div').css({ 'width': tileCol });
// });