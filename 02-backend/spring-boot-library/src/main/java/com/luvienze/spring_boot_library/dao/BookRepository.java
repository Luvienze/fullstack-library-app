package com.luvienze.spring_boot_library.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.luvienze.spring_boot_library.entity.Book;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins = "http://localhost:3000", methods = RequestMethod.GET)
public interface BookRepository extends JpaRepository<Book, Long> {
}
