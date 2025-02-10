package com.luvienze.spring_boot_library.dao;

import com.luvienze.spring_boot_library.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.PUT})
public interface ReviewRepository extends JpaRepository<Review, Long> {

    Page<Review> findBookById(@RequestParam("book_id") Long bookId, Pageable pageable);
}
