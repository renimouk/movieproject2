$(document).ready(function(){
	// The base url for all API calls
	var apiKey = '3b302c0993248e42b62c240ba188fb59'
	var apiBaseURL = 'http://api.themoviedb.org/3/';

	var imageBaseUrl = 'https://image.tmdb.org/t/p/';

	const popular = apiBaseURL + 'movie/popular?api_key=' + apiKey;

	var currentPage = 1;
	var nextPage = 2;
	var prevPage = 3;
	var lastUrl = '';
	var totalPages = 100;

	//==============================================================================
	//====================== Get "Popular" data on default. ====================
	//=================== Change results when a genre is clicked on.================
	//==============================================================================
	function getPopularMovies(){
		$.getJSON(popular, function(nowPlayingData){
			// console.log(nowPlayingData);
			//we needed to add .results because nowPlayingData is an array.
			for(let i = 0; i<nowPlayingData.results.length; i++){
				// w300 is how wide it is
				var mid = nowPlayingData.results[i].id;
				// mid = movie ID
				// console.log(i)

				
					var poster = imageBaseUrl+'w300'+nowPlayingData.results[i].poster_path;
					// console.log(poster);

					var title = nowPlayingData.results[i].original_title;

					var releaseDate = nowPlayingData.results[i].release_date;

					var overview = nowPlayingData.results[i].overview;
					// $('.overview').addClass('overview');

					var voteAverage = nowPlayingData.results[i].vote_average;				
					// console.log(movieKey

					// console.log()

					var nowPlayingHTML = `<div class="col-sm-3 col-md-3 col-lg-3 eachMovie">
					<button type="button" class="btnModal" data-bs-toggle="modal" data-bs-target="#exampleModal${i}"><img src="${poster}"><br>${title}</button> 	
					<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content row">
								<div class="col-sm-6 moviePosterInModal">
									<a href=""><img src="${poster}"></a> 
								</div>
								<div class="col-sm-6 movieDetails">
									<div class="movieName">${title}</div><br>
									<div class="release">Release Date: ${releaseDate}</div><br>
									<div class="overview"> ${overview} </div><br>
									<div class="rating">Rating: ${voteAverage} /10</div><br>
								</div> 
							</div>
						</div> 
					</div>
				</div>` 

					$('#movie-grid').append(nowPlayingHTML);
					//Without this line, there is nowhere for the posters and overviews to display so it doesn't show up 
					$('#movieGenreLabel').html("Popular");
					//h1 will change depending on what is clicked. Will display "Popular" in this case.
				
			}
		}) 
	}
	
	//==============================================================================
	//====================== Get movies by genre ===================================
	//==============================================================================
	function getSeries(){
		const series = apiBaseURL + 'discover/tv?api_key=' + apiKey;
		$.getJSON(series, function(nowPlayingData){
			//we needed to add .results because nowPlayingData is an array.
			for(let i = 0; i<nowPlayingData.results.length; i++){
				// w300 is how wide it is
				var mid = nowPlayingData.results[i].id;
				// mid = movie ID
				// console.log(i)

				
					var poster = imageBaseUrl+'w300'+nowPlayingData.results[i].poster_path;
					// console.log(poster);

					var title = nowPlayingData.results[i].name;

					var releaseDate = nowPlayingData.results[i].release_date;

					var overview = nowPlayingData.results[i].overview;
					// $('.overview').addClass('overview');

					var voteAverage = nowPlayingData.results[i].vote_average;				
					

					var nowPlayingHTML = `<div class="col-sm-3 col-md-3 col-lg-3 eachMovie">
					<button type="button" class="btnModal" data-bs-toggle="modal" data-bs-target="#exampleModal${i}"><img src="${poster}"><br>${title}</button> 	
					<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content row">
								<div class="col-sm-6 moviePosterInModal">
									<a href=""><img src="${poster}"></a> 
								</div>
								<div class="col-sm-6 movieDetails">
									<div class="movieName">${title}</div><br>
									<div class="release">Release Date: ${releaseDate}</div><br>
									<div class="overview"> ${overview} </div><br>
									<div class="rating">Rating: ${voteAverage} /10</div><br>
								</div> 
							</div>
						</div> 
					</div>
				</div>` 

					$('#movie-grid').append(nowPlayingHTML);
					//Without this line, there is nowhere for the posters and overviews to display so it doesn't show up 
					$('#movieGenreLabel').html("Tv shows");
					//h1 will change depending on what is clicked. Will display "Popular" in this case.
				
			}
		}) 
	}


	function getMoviesByGenre(genre_id){
		const getMoviesByGenreURL = apiBaseURL + 'genre/' + genre_id + '/movies?api_key=' + apiKey;
		// console.log(getMoviesByGenreURL);

		$.getJSON(getMoviesByGenreURL, function(genreData){
			// console.log(genreData)
			for(let i = 0; i<genreData.results.length; i++){
				var mid = genreData.results[i].id;

				
					var poster = imageBaseUrl+'w300'+genreData.results[i].poster_path;
					var title = genreData.results[i].original_title;
					var releaseDate = genreData.results[i].release_date;
					var overview = genreData.results[i].overview;
					var voteAverage = genreData.results[i].vote_average;			
					var genreHTML = `<div class="col-sm-3 col-md-3 col-lg-3 eachMovie">
					<button type="button" class="btnModal" data-bs-toggle="modal" data-bs-target="#exampleModal${i}"><img src="${poster}"><br>${title}</button> 	
					<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content row">
								<div class="col-sm-6 moviePosterInModal">
									<a href=""><img src="${poster}"></a> 
								</div>
								<div class="col-sm-6 movieDetails">
									<div class="movieName">${title}</div><br>
									<div class="release">Release Date: ${releaseDate}</div><br>
									<div class="overview"> ${overview} </div><br>
									<div class="rating">Rating: ${voteAverage} /10</div><br>
								</div> 
							</div>
						</div> 
					</div>
				</div>` 
					$('#movie-grid').append(genreHTML);
					//Without this line, there is nowhere for the posters and overviews to display so it doesn't show up 
					// $('#movieGenreLabel').html("Popular");
					//h1 will change depending on what is clicked. Will display "Popular" in this case.
				
			}
		}) 
	}
	// call getMoviesByGenre using click function but call getPopularMovies on default.
	getPopularMovies();

	//Reset HTML strings to empty to overwrite with new one!
	var nowPlayingHTML = '';
	var genreHTML = '';

	$('.navbar-brand').click(function(){
		getPopularMovies();
		$('#movie-grid').html(nowPlayingHTML);
		$('#movieGenreLabel').html("Popular");
	})		
	$('.nowPlaying').click(function(){
		getPopularMovies();
		$('#movie-grid').html(nowPlayingHTML);
		$('#movieGenreLabel').html("Popular");
	})

	$('.series').click(function(){
		getSeries();
		$('#movie-grid').html(nowPlayingHTML);
		$('#movieGenreLabel').html("Popular");
	})
	$('#action').click(function(){
		getMoviesByGenre(28);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Action");
	})
	$('#adventure').click(function(){
		getMoviesByGenre(12);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Adventure");
	})
	$('#animation').click(function(){
		getMoviesByGenre(16);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Animation");
	})
	$('#comedy').click(function(){
		getMoviesByGenre(35);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Comedy");
	})
	$('#crime').click(function(){
		getMoviesByGenre(80);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Crime");
	})
	$('#drama').click(function(){
		getMoviesByGenre(18);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Drama");
	})
	$('#family').click(function(){
		getMoviesByGenre(10751);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Family");
	})
	$('#fantasy').click(function(){
		getMoviesByGenre(14);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Fantasy");
	})
	$('#history').click(function(){
		getMoviesByGenre(36);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("History");
	})
	$('#horror').click(function(){
		getMoviesByGenre(27);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Horror");
	})
	$('#music').click(function(){
		getMoviesByGenre(10402);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Music");
	})
	$('#romance').click(function(){
		getMoviesByGenre(10749);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Romance");
	})
	$('#scifi').click(function(){
		getMoviesByGenre(878);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Science Fiction");
	})
	$('#thriller').click(function(){
		getMoviesByGenre(53);
		$('#movie-grid').html(genreHTML);
		$('#movieGenreLabel').html("Thriller");
	})

	//==============================================================================
	//====================== Search Function =======================================
	//==============================================================================

	//Run function searchMovies AFTER an input has been submitted. Submit form first.
	//Run searchMovies once to add an empty html to movie-grid using .html(). Then, overwrite it with the new html using .append(). Need to use .append() to overwrite or all the images will display on top of each other.

	var searchTerm = '';
	//reference entire search form
	$('.searchForm').submit(function(event){
		$('#movie-grid').html('');
		event.preventDefault();
		//search term is only concerned with what the user inputted 
		//Get input with .val();
		searchTerm = $('.form-control').val();
		searchMovies();
	})

	function searchMovies(){
		//need to include query in url. (ex: &query=boss+baby)
		const searchMovieURL = apiBaseURL + 'search/multi?api_key=' + apiKey + "&query=" + searchTerm;
			// console.log(searchMovieURL);
		$.getJSON(searchMovieURL, function(movieSearchResults){
			// console.log(movieSearchResults);
			for (let i = 0; i<movieSearchResults.results.length; i++){
				var mid = movieSearchResults.results[i].id;		

				
					// console.log(movieKey)
					var poster = imageBaseUrl+'w300'+movieSearchResults.results[i].poster_path;
					var title = (movieSearchResults.results[i].original_title) ? movieSearchResults.results[i].original_title : movieSearchResults.results[i].name;
					var releaseDate = movieSearchResults.results[i].release_date;
					var overview = movieSearchResults.results[i].overview;
					var voteAverage = movieSearchResults.results[i].vote_average;			
					var searchResultsHTML = `<div class="col-sm-3 col-md-3 col-lg-3 eachMovie">
					<button type="button" class="btnModal" data-bs-toggle="modal" data-bs-target="#exampleModal${i}"><img src="${poster}"><br>${title}</button> 	
					<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content row">
								<div class="col-sm-6 moviePosterInModal">
									<a href=""><img src="${poster}"></a> 
								</div>
								<div class="col-sm-6 movieDetails">
									<div class="movieName">${title}</div><br>
									<div class="release">Release Date: ${releaseDate}</div><br>
									<div class="overview"> ${overview} </div><br>
									<div class="rating">Rating: ${voteAverage} /10</div><br>
								</div> 
							</div>
						</div> 
					</div>
				</div>` 
					// console.log(searchResultsHTML)
					$('#movie-grid').append(searchResultsHTML);
					//Label will be whatever user input was
					$('#movieGenreLabel').html(searchTerm);	
				
			}
		})
	}
});



