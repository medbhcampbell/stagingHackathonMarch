package com.brainquiz.leaderboard.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brainquiz.leaderboard.models.Entry;
import com.brainquiz.leaderboard.service.LeaderboardService;

@RestController
@RequestMapping(path = "/leaderboard")
@CrossOrigin(origins = "*")
public class LeaderboardController {
	
	@Autowired
	private LeaderboardService lService;
	
	@GetMapping()
	public List<Entry> getScores(){
//		List<Entry> list = new ArrayList<Entry>();
//		list.add(new Entry("test", 30));
//		return list;
		return lService.getLeaderboard();
	}
	
	@PostMapping()
	public void updateScores(@RequestBody Entry e) {
		lService.addEntry(e);
	}
}
