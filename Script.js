/// <reference path="jquery.js" />
var deckofcards = {
	"cards": [
        {
        	"suit": "hearts",
        	"value": "2",
        	"image": "images/2H.png"
        },
            {
            	"suit": "clubs",
            	"value": "2",
            	"image": "images/2C.png"
            },
	    {
	    	"suit": "spades",
	    	"value": "2",
	    	"image": "images/2S.png"
	    },
	    {
	    	"suit": "diamonds",
	    	"value": "2",
	    	"image": "images/2D.png"
	    },
		    {
		    	"suit": "hearts",
		    	"value": "3",
		    	"image": "images/3H.png"
		    },
			    {
			    	"suit": "clubs",
			    	"value": "3",
			    	"image": "images/3C.png"
			    },
				    {
				    	"suit": "spades",
				    	"value": "3",
				    	"image": "images/3S.png"
				    },
					    {
					    	"suit": "diamonds",
					    	"value": "3",
					    	"image": "images/3D.png"
					    },
						    {
						    	"suit": "hearts",
						    	"value": "4",
						    	"image": "images/4H.png"
						    },
							    {
							    	"suit": "clubs",
							    	"value": "4",
							    	"image": "images/4C.png"
							    },
								    {
								    	"suit": "spades",
								    	"value": "4",
								    	"image": "images/4D.png"
								    },
									    {
									    	"suit": "diamonds",
									    	"value": "4",
									    	"image": "images/4D.png"
									    },
										    {
										    	"suit": "hearts",
										    	"value": "5",
										    	"image": "images/5H.png"
										    },
											    {
											    	"suit": "clubs",
											    	"value": "5",
											    	"image": "images/5C.png"
											    },
												    {
												    	"suit": "spades",
												    	"value": "5",
												    	"image": "images/5S.png"
												    },
													    {
													    	"suit": "diamonds",
													    	"value": "5",
													    	"image": "images/5D.png"
													    },
														    {
														    	"suit": "hearts",
														    	"value": "6",
														    	"image": "images/6H.png"
														    },
															    {
															    	"suit": "clubs",
															    	"value": "6",
															    	"image": "images/6C.png"
															    },
																    {
																    	"suit": "spades",
																    	"value": "6",
																    	"image": "images/6S.png"
																    },
																	    {
																	    	"suit": "diamonds",
																	    	"value": "6",
																	    	"image": "images/6D.png"
																	    },
																		    {
																		    	"suit": "hearts",
																		    	"value": "7",
																		    	"image": "images/7H.png"
																		    },
																			    {
																			    	"suit": "clubs",
																			    	"value": "7",
																			    	"image": "images/7C.png"
																			    },
																				    {
																				    	"suit": "spades",
																				    	"value": "7",
																				    	"image": "images/7S.png"
																				    },
																					    {
																					    	"suit": "diamonds",
																					    	"value": "7",
																					    	"image": "images/7D.png"
																					    },
																						    {
																						    	"suit": "hearts",
																						    	"value": "8",
																						    	"image": "images/8H.png"
																						    },
																							    {
																							    	"suit": "clubs",
																							    	"value": "8",
																							    	"image": "images/8C.png"
																							    },
																								    {
																								    	"suit": "spades",
																								    	"value": "8",
																								    	"image": "images/8S.png"
																								    },
																									    {
																									    	"suit": "diamonds",
																									    	"value": "8",
																									    	"image": "images/8D.png"
																									    },
																										    {
																										    	"suit": "hearts",
																										    	"value": "9",
																										    	"image": "images/9H.png"
																										    },
																											    {
																											    	"suit": "clubs",
																											    	"value": "9",
																											    	"image": "images/9C.png"
																											    },
																												    {
																												    	"suit": "spades",
																												    	"value": "9",
																												    	"image": "images/9S.png"
																												    },
																													    {
																													    	"suit": "diamonds",
																													    	"value": "9",
																													    	"image": "images/9D.png"
																													    },
																														    {
																														    	"suit": "hearts",
																														    	"value": "10",
																														    	"image": "images/10H.png"
																														    },
																															    {
																															    	"suit": "clubs",
																															    	"value": "10",
																															    	"image": "images/10C.png"
																															    },
																																    {
																																    	"suit": "spades",
																																    	"value": "10",
																																    	"image": "images/10S.png"
																																    },
																																	    {
																																	    	"suit": "diamonds",
																																	    	"value": "10",
																																	    	"image": "images/10D.png"
																																	    },
																																		    {
																																		    	"suit": "hearts",
																																		    	"value": "jack",
																																		    	"image": "images/JH.png"
																																		    },
																																			    {
																																			    	"suit": "clubs",
																																			    	"value": "jack",
																																			    	"image": "images/JC.png"
																																			    },
																																				    {
																																				    	"suit": "spades",
																																				    	"value": "jack",
																																				    	"image": "images/JS.png"
																																				    },
																																					    {
																																					    	"suit": "diamonds",
																																					    	"value": "jack",
																																					    	"image": "images/JD.png"
																																					    },
																																						    {
																																						    	"suit": "hearts",
																																						    	"value": "queen",
																																						    	"image": "images/QH.png"
																																						    },
																																							    {
																																							    	"suit": "clubs",
																																							    	"value": "queen",
																																							    	"image": "images/QC.png"
																																							    },
																																								    {
																																								    	"suit": "spades",
																																								    	"value": "queen",
																																								    	"image": "images/QS.png"
																																								    },
																																									    {
																																									    	"suit": "diamonds",
																																									    	"value": "queen",
																																									    	"image": "images/QD.png"
																																									    },
																																										    {
																																										    	"suit": "hearts",
																																										    	"value": "king",
																																										    	"image": "images/KH.png"
																																										    },
																																											    {
																																											    	"suit": "clubs",
																																											    	"value": "king",
																																											    	"image": "images/KC.png"
																																											    },
																																												    {
																																												    	"suit": "spades",
																																												    	"value": "king",
																																												    	"image": "images/KS.png"
																																												    },
																																													    {
																																													    	"suit": "diamonds",
																																													    	"value": "king",
																																													    	"image": "images/KD.png"
																																													    },
																																														    {
																																														    	"suit": "hearts",
																																														    	"value": "ace",
																																														    	"image": "images/AH.png"
																																														    },
																																															    {
																																															    	"suit": "clubs",
																																															    	"value": "ace",
																																															    	"image": "images/AC.png"
																																															    },
																																																    {
																																																    	"suit": "spades",
																																																    	"value": "ace",
																																																    	"image": "images/AS.png"
																																																    },
																																																	  {
																																																	  	"suit": "diamonds",
																																																	  	"value": "ace",
																																																	  	"image": "images/AD.png"
																																																	  }

	]
}

var targetarea = document.getElementById("cardtable");
var activecards = document.getElementsByClassName("activecard")
var zindextracker = 0;
var shufflecount = 0;
function buildcards(card) {

    var newcard = document.createElement("p");
    "url("+deckofcards.cards[card].image +")"
    newcard.style.backgroundImage = "url(" + deckofcards.cards[card].image + ")";
    newcard.style.backgroundRepeat = "no-repeat";
    newcard.className = "activecard";
    newcard.id = deckofcards.cards[card].value +"of"+deckofcards.cards[card].suit
    targetarea.appendChild(newcard);
  
}
for (i = 0; i < deckofcards.cards.length; i++) {
    buildcards(i);
    targetarea.children[i].style.backgroundImage = deckofcards.cards[i].image;
}
function setzindex() {
    zindextracker = zindextracker + 1;
    this.style.zIndex = zindextracker;
    console.log(this);
}
for (i = 0; i < activecards.length; i++) {
    activecards[i].addEventListener("mousedown", setzindex);
}
function makedraggable () {
    $(".activecard").draggable();
}
makedraggable()

function shuffle() {
    for (i = 0; i < activecards.length; i++) {
       activecards[i].style.zIndex = Math.round(Math.random() * (-activecards.length - 0))
    }
}
shuffle()