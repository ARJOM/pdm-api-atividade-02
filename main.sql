CREATE TABLE IF NOT EXISTS subjects(
    id TEXT,
    name TEXT,
    workload TEXT,
    created_at DATE,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS students(
    id TEXT,
    name TEXT,
    email TEXT,
    created_at DATE,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS surveys(
    id TEXT,
    title TEXT,
    description TEXT,
    created_at DATE,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS students_subjects(
    id TEXT,
    user_id TEXT,
    subject_id TEXT,
    created_at DATE,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES students(id),
    FOREIGN KEY(subject_id) REFERENCES subjects(id)
);

CREATE TABLE IF NOT EXISTS surveys_students(
    id TEXT,
    user_id TEXT,
    survey_id TEXT,
    value TEXT,
    created_at DATE,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES students(id),
    FOREIGN KEY(survey_id) REFERENCES surveys(id)
);
