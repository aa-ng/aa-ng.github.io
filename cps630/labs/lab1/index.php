<!DOCTYPE html>
<html>
	<head>
		<!-- Sets the character set to Unicode Transformation Format 8-->	
		<meta charset="UTF-8">
		<!-- -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Title of page -->
		<title>CPS630 Lab 1</title>
		<!-- CSS3 Styling sheet --> 
		<link rel="stylesheet" type="text/css" href="http://www.scs.ryerson.ca/~mgng/cps630/labs/lab1/style.css">
	</head>

	<body>
		<!-- Header/top bar of page -->
		<div class="col-12 accent-darkest header">
			<header>
				<!-- To be implemented top menubar dropdown with button control (to much work in CSS)
				<div class="menubar-button">
					<img style="position:absolute left:1; top: 5; z:-1;" src="http://www.scs.ryerson.ca/~mgng/rsc/img/menu.png">
					<input type="radio" id="show-menu" name="menubutton">
					<input type="radio" id="hide-menu" name="menubutton">
				</div>-->
				
				<!-- Link/Title to main site -->
				<div class="left">
					<a href="http://www.scs.ryerson.ca/~mgng/"><h1>Alex Ng</h1></a>
				</div>
				<!-- End of link to main site -->
				
				<!-- Profile picture -->
				<div class="right">
					<img class="circle" src="http://www.scs.ryerson.ca/~mgng/rsc/img/profile_pic.jpg" alt="profile picture">
				</div>
				<!-- End of profile picture -->
			</header>
		</div>  
		<!--End of header/top bar of page --> 
			
		<!-- Sidbar container -->
		<div class="col-4">
			<!-- Sidebar card -->
			<div class="col-12 accent item sidebar">
				<!-- Card content container -->
				<div class="col-12">
					<h2>Home</h2>
						<ul>
							<li>
								<details>
									<summary>Labs</summary>
									<ul>
										<li><a href=""><p>Lab 1 (home)</p></a></li>
									</ul>	
								</details>
							</li>
						</ul>
					<h2>Servers</h2>
						<ul>
							<li>
								<details>
									<summary>Status</summary>	
									<ul>	
										<li><a href=""><p>cake-net.zapto.org</p></a></li>
										<li><a href=""><p>~mgng</p></a></li>
									</ul>
								</details>
							</li>
						</ul>
					<h2>Weather</h2>
					<h2>About me</h2>
					<h2>Contact me</h2>
					<h2>Notes</h2>
					<h2>Welcome</h2>
					<h2>News</h2>
					<h2>Projects</h2>
				</div>
				<!-- Card content container -->
			</div>
			<!-- End of sidebar card -->
		</div>
		<!-- End of sidebar container -->
	
		<!-- Main content container -->
		<div class="content-container">	
			<!-- Main card -->
			<div class="col-12 accent item">
				<!-- About me container -->	
				<div class="col-12">
					<article>	
						<h1>About me</h1>
						<p>
							Currently studying in their 2nd year of Computer Science at Ryerson University, Alex Ng is interested in Computer graphics and vision. Alex has hosted and deployed various internet services and web servers while practicing Front-end web development. Alex is currently working on side projects to strengthen their software development portfolio. 
						</p>
					</article>
				</div>
				<!-- End of about me container -->

				<!-- Contact me container -->
				<div class="col-4 text-center">
					<aside>
						<!-- Title container -->
						<div class="col-12">
							<h1>Contact me</h1>
						</div>
						<!-- End of title container -->
						
						<!-- Facebook container -->
						<div class="col-3">
							<figure>
								<a href=""><img class="icon" src="http://www.scs.ryerson.ca/~mgng/rsc/img/social/facebook.png" alt="facebook icon"></a>
								
								<figcaption><h4>Facebook</h4></figcaption>
							</figure>
						</div>
						<!-- End of facebook container -->

						<!-- Email container -->
						<div class="col-3">
							<figure>
								<a href=""><img class="icon" src="http://www.scs.ryerson.ca/~mgng/rsc/img/social/email.png" alt="email icon"></a>	
								<figcaption><h4>Email</h4></figcaption>
							</figure>
						</div>
						<!-- End of email container -->

						<!-- Linkedin container -->
						<div class="col-3">
							<figure>
								<a href="https://www.linkedin.com/in/alex-ng-130039134"><img class="icon" src="http://www.scs.ryerson.ca/~mgng/rsc/img/social/linkedin.png" alt="linkedin icon"></a>
							
								<figcaption><h4>LinkedIn</h4></figcaption>
							</figure>
						</div>
						<!-- End of linkedin container -->						

						<!-- Twitter container -->
						<div class="col-3">
							<figure>	
								<a href=""><img class="icon" src="http://www.scs.ryerson.ca/~mgng/rsc/img/social/twitter.png" alt="twitter icon"></a>
								<figcaption><h4>Twitter</h4></figcaption>
							</figure>
						</div>
						<!-- End of twitter container -->

						<!-- Extras container -->
						<div class="col-12">
							<details>
								<summary>Email address</summary>
								<ul>
									<li><h3>alex.ng.personal@gmail.com</h3></li>
								</ul>
							</details>
						</div>
						<!-- End of extras container -->
					</aside>
				</div>
				<!-- End of contact me container -->
				
				<!-- Notes container -->
				<div class="col-4 text-center">
					<aside>
						<div class="col-12">
							<h1>Notes</h1>
							<h3>Ryerson University</h3>
						</div>
						<p>CPS590</p>
					</aside>
				</div>
				<!-- End of notes container -->
				
				<!-- -->
				<div class="col-4 text-center">
					<aside>
						<div class="col-12">
							<h1>Header 4</h1>
						</div>
						<div class="col-12">
							<p>Lorem ipsum</p>
						</div>
					</aside>
				</div>
				<!-- -->
			</div>
			<!-- End of Main card -->
			
			<!-- Welcome card -->
			<div class="col-12 item">
				<!-- Welcome container -->	
				<div class="col-6 text-center">
					<h1>Welcome!</h1>
					<p>	
						The site was made in <b class="accent">HTML</b> and <b class="accent">CSS</b> only. (no frameworks)		
					</p>
					<p>
						This is the first lab for the course <b class="accent">CPS630</b> at Ryerson University.
					</p>
				</div>
				<!-- End of welcome container -->
					
				<!-- News container -->
				<div class="col-6 text-center">
					<h1>News!</h1>
					<ul>
						<li>The smartwatch company <b class="secondary">Pebble</b> was recently bought by fitbit.</li>
						<li><b class="secondary">CES 2017</b> has ended</li>
						<li><b class="secondary">Blackbery</b> is coming out with a new smartphone</li>
					</ul>	
				</div>
				<!-- End of news container -->
			</div>
			<!-- End of welcome card -->

			<!-- TranSleep info card -->
			<div class="col-12 accent item" id="TranSleep">
				<!-- Content container -->
				<div class="col-12">	
					<h1>TranSleep Android Project</h1>
					<p>
						The TranSleep project is designed to alert users if they are near their bus-stop so that they can be at peace of mind.
					</p>
					<p>
						Built at HTV (hack the valley) 2017 in 36 hours our team has plans for a 2017 release in the Google play store.
					</p>
					<br>
					<p>
						<b>Hover over here to see more details (tap on mobile)</b>
					</p>
				</div>
			</div>
			<!-- End of <TranSleep info card -->
					
			<!-- TranSleep Android app overlay -->
			<div class="overlay" id="TranSleep-overlay">
				<!-- Overlay screenshots container -->
				<div class="col-6 text-center">
					<h1>Screenshots</h1>
					<img class="screen" src="http://www.scs.ryerson.ca/~mgng/rsc/img/TranSleep_screen1.png" alt="screenshot1">						
					<img class="screen" src="http://www.scs.ryerson.ca/~mgng/rsc/img/TranSleep_screen3.png" alt="screenshot2">
				</div>
				<!-- End of overlay screenshots container -->
				
				<!-- Overlay details container -->
				<div class="col-6 text-center">
					<h1>Details</h1>
					<h2>Destination by stop #</h2>
					<h2>Destination by route #</h2>
				</div>
				<!-- End of overlay details container -->
			</div>
			<!-- End of TranSleep android app overlay --> 
		</div>
	
		<!-- Footer/Bottom bar container -->
		<footer>
			<div class="col-12 accent-darkest footer">
				<!-- menu container -->
				<div class="col-12 text-center">
					<details>
					</details>	
				</div>
				<!-- End of menu container -->
				
				<!-- Links container -->
				<div class="col-3">
					<a href="#top"><h1>top</h1></a>
				</div>
				<!-- End of links container -->
			</div>
		</footer>
		<!-- End of footer/bottom bar container -->
	</body>
</html>
