package com.brainquiz.leaderboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.brainquiz.leaderboard.dao.LeaderboardRepo;
import com.brainquiz.leaderboard.models.Entry;

@Service("LeaderboardService")
public class LeaderboardService {
	
	@Autowired
	private LeaderboardRepo lRepo;
	
	public LeaderboardService(LeaderboardRepo repo) {
		this.lRepo = repo;
	};
	
	public List<Entry> getLeaderboard() {
		//List<Entry> top = lRepo.findAll();
		
		//Collections.sort((List<T>) top);
		List<Entry> top = lRepo.findAll(Sort.by(Direction.DESC, "score"));
		
		return top.subList(0, 10);
	}
	
	public void addEntry(Entry e) {
		lRepo.save(e);
	}
	
	
	
}
