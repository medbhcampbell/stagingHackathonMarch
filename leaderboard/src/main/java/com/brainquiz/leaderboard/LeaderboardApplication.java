package com.brainquiz.leaderboard;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
public class LeaderboardApplication {

	public static void main(String[] args) {
		SpringApplication.run(LeaderboardApplication.class, args);
	}
}
