contract BlockTubePrepaid {
	
	function claim(address _claimer){
		// if the caller is not the owner -> throw
		if (msg.sender != msg.owner) throw;
		// send all ether to claimer
		_claimer.send(balance());

		// end all BTcoins to _claimer

	}

}