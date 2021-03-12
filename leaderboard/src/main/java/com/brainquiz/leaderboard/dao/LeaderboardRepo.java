package com.brainquiz.leaderboard.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brainquiz.leaderboard.models.Entry;

@Repository("LeaderboardRepo")
public interface LeaderboardRepo extends JpaRepository<Entry, Integer>{
	
}
