<template>
	<v-footer class="bg-primaryBackground d-flex flex-column footer">
		<v-container>
			<v-row>
				<v-col cols="12" lg="3" md="4" sm="6">
					<div class="footer_content_item">
						<h1 class="footer_content_title">LANGUAGE MOVIES</h1>
						<ul>
							<li>
								<a href=""> English movie</a>
							</li>
							<li>
								<a href=""> Tamil movie </a>
							</li>
							<li>
								<a href=""> Punjabi Movie</a>
							</li>
							<li>
								<a href=""> Hindi movie</a>
							</li>
							<li>
								<a href=""> Malyalam movie</a>
							</li>
							<li>
								<a href=""> English Action movie</a>
							</li>
							<li>
								<a href=""> Hindi Action movie</a>
							</li>
						</ul>
					</div>
				</v-col>
				<v-col cols="12" lg="3" md="4" sm="6">
					<div class="footer_content_item">
						<h1 class="footer_content_title">
							MOVIES BY PRESENTER
						</h1>
						<ul>
							<li>
								<a href=""> Action movie</a>
							</li>
							<li>
								<a href=""> Romantic movie </a>
							</li>
							<li>
								<a href=""> Adult movie </a>
							</li>
							<li>
								<a href=""> Comedy movie </a>
							</li>
							<li>
								<a href=""> Drama movie </a>
							</li>
							<li>
								<a href=""> Musical movie </a>
							</li>
							<li>
								<a href=""> Classical movie</a>
							</li>
						</ul>
					</div>
				</v-col>
				<v-col cols="12" lg="3" md="4" sm="6">
					<div class="footer_content_item">
						<h1 class="footer_content_title">BOOKING ONLINE</h1>
						<ul>
							<li>
								<a href=""> www.example.com </a>
							</li>
							<li>
								<a href=""> www.hello.com </a>
							</li>
							<li>
								<a href=""> www.example.com </a>
							</li>
							<li>
								<a href=""> www.hello.com </a>
							</li>
							<li>
								<a href=""> www.example.com </a>
							</li>
							<li>
								<a href=""> www.hello.com </a>
							</li>
							<li>
								<a href=""> www.example.com</a>
							</li>
						</ul>
					</div>
				</v-col>
				<v-col cols="12" lg="3" md="4" sm="6">
					<div class="footer_content_item">
						<h1 class="footer_content_title">
							CONNECTING the movie
						</h1>
						<ul class="d-flex align-center">
							<li>
								<a href="">
									<v-icon icon="mdi-facebook"></v-icon>
								</a>
							</li>
							<li>
								<a href="">
									<v-icon icon="mdi-youtube"></v-icon>
								</a>
							</li>
							<li>
								<a href="">
									<v-icon icon="mdi-instagram"></v-icon>
								</a>
							</li>
							<li>
								<a href="">
									<v-icon icon="mdi-twitter"></v-icon>
								</a>
							</li>
							<li>
								<a href="">
									<v-icon icon="mdi-gitlab"></v-icon>
								</a>
							</li>
							<li>
								<a href="">
									<v-icon icon="mdi-github"></v-icon>
								</a>
							</li>
						</ul>
						<div class="icons">
							<img
								src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
								alt=""
							/>
						</div>
					</div>
				</v-col>
			</v-row>
			<v-divider class="mt-10"></v-divider>
			<div class="footer_bottom pt-10">
				<v-img src="../../../public/images/2.png" height="50"></v-img>
				<div class="px-4 py-2 text-center">
					<p>
						© 2022 The Movie. Template design ( November
						{{ new Date().getFullYear() }} )
					</p>
					<v-spacer></v-spacer>
				</div>
			</div>
		</v-container>
	</v-footer>
</template>
<script setup></script>
<style lang="scss"></style>
