CREATE TABLE subjects(
    id TEXT,
    name TEXT,
    workload TEXT,
    created_at DATE,
    PRIMARY KEY(id)
);

CREATE TABLE students(
    id TEXT,
    name TEXT,
    email TEXT,
    created_at DATE,
    PRIMARY KEY(id)
);

CREATE TABLE surveys(
    id TEXT,
    title TEXT,
    description TEXT,
    created_at DATE,
    PRIMARY KEY(id)
);

CREATE TABLE students_subjects(
    user_id TEXT,
    subject_id TEXT,
    created_at DATE,
    CONSTRAINT PK_students_subjects PRIMARY KEY (user_id,subject_id),
    FOREIGN KEY(user_id) REFERENCES students(id),
    FOREIGN KEY(subject_id) REFERENCES subjects(id)
);

CREATE TABLE surveys_students(
    id TEXT,
    user_id TEXT,
    survey_id TEXT,
    value int,
    created_at DATE,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES students(id),
    FOREIGN KEY(survey_id) REFERENCES surveys(id)
);
