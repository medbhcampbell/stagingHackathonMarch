package com.brainquiz.leaderboard.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@EnableAutoConfiguration
@Entity
@Table(name = "leaderboard")
public class Entry {
	
	@Id
    @Column(name="entry_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
	@Column(name="username", nullable = false)
	private String username;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Column(name="score", nullable = false)
	private int score;
	
	public Entry(String username, int score) {
		super();
		this.username = username;
		this.score = score;
	}
	public Entry() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	@Override
	public String toString() {
		return "Entry [username=" + username + ", score=" + score + "]";
	}

}
