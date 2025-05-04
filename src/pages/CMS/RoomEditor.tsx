import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CMSLayout from "@/components/CMSLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  GripVertical,
  Plus,
  X,
  FileImage,
  FileVideo,
  Save,
  Clock,
  BookOpen,
  FileCheck,
} from "lucide-react";
import { toast } from "sonner";

// Mock initial room data
const roomInitialData = {
  id: "intro-to-cells",
  title: "Cell Structure & Function",
  subject: "Biology",
  level: "Beginner",
  module: "Cell Structure & Function",
  instructor: "Dr. Emma Chen",
  duration: "45 mins",
  xpPoints: 50,
  description:
    "Explore the basic building blocks of life and understand how cells function.",
  sections: [
    {
      id: "what-are-cells",
      title: "1. Introduction to Cells",
      content:
        "Cells are the fundamental units of life. They are the smallest structural and functional units of living organisms. All living things are made up of cells, from single-celled bacteria to multi-cellular organisms like humans.\n\nThere are two main types of cells:\n- Prokaryotic cells - simple cells without a nucleus (e.g., bacteria)\n- Eukaryotic cells - complex cells with a nucleus (e.g., plant and animal cells)",
      image: "/public/lovable-uploads/4ce305d8-2d7c-42f8-8aaa-fcd470a3bf58.png",
    },
    {
      id: "cell-organelles",
      title: "2. Cell Organelles",
      content:
        "Cell organelles are specialized structures within a cell that perform specific functions. In eukaryotic cells, these include:\n\n- Nucleus: Contains DNA and controls cellular activities\n- Mitochondria: Produces energy through cellular respiration\n- Endoplasmic Reticulum: Synthesizes proteins and lipids\n- Golgi Apparatus: Processes and packages proteins\n- Lysosomes: Digest waste materials and cellular debris\n- Ribosomes: Site of protein synthesis",
    },
    {
      id: "cell-membrane",
      title: "3. Cell Membrane",
      content:
        "The cell membrane is a semipermeable lipid bilayer that surrounds the cell and separates it from the external environment. Its main functions include:\n\n- Controlling what enters and leaves the cell\n- Maintaining cell shape and integrity\n- Cell-to-cell communication\n- Providing structural support",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "What are the two main types of cells?",
      options: [
        "Simple and complex cells",
        "Prokaryotic and eukaryotic cells",
        "Animal and plant cells",
        "Large and small cells",
      ],
      answer: 1,
    },
    {
      id: "q2",
      question:
        "Which organelle is responsible for energy production in the cell?",
      options: ["Nucleus", "Mitochondria", "Golgi apparatus", "Lysosome"],
      answer: 1,
    },
    {
      id: "q3",
      question: "What is the primary function of the cell membrane?",
      options: [
        "Energy production",
        "Protein synthesis",
        "Controlling what enters and leaves the cell",
        "Cell division",
      ],
      answer: 2,
    },
  ],
};

const RoomEditor = () => {
  const { roomId } = useParams();
  const isNewRoom = roomId === "new";

  const [room, setRoom] = useState(
    isNewRoom
      ? {
          id: "",
          title: "",
          subject: "Biology",
          level: "Beginner",
          module: "",
          instructor: "",
          duration: "30 mins",
          xpPoints: 50,
          description: "",
          sections: [],
          quiz: [],
        }
      : roomInitialData
  );

  const [activeTab, setActiveTab] = useState("details");

  // For simplicity, saving is just a mock action
  const saveRoom = () => {
    toast.success(`Room ${isNewRoom ? "created" : "updated"} successfully!`);
    // In a real application, this would make an API request to save the room
  };

  const addSection = () => {
    const newSection = {
      id: `section-${Date.now()}`,
      title: `New Section ${room.sections.length + 1}`,
      content: "",
      image: "",
    };
    setRoom({
      ...room,
      sections: [...room.sections, newSection],
    });
  };

  const removeSection = (index: number) => {
    const newSections = [...room.sections];
    newSections.splice(index, 1);
    setRoom({
      ...room,
      sections: newSections,
    });
  };

  const updateSection = (index: number, field: string, value: string) => {
    const newSections = [...room.sections];
    newSections[index] = {
      ...newSections[index],
      [field]: value,
    };
    setRoom({
      ...room,
      sections: newSections,
    });
  };

  const addQuestion = () => {
    const newQuestion = {
      id: `q${room.quiz.length + 1}`,
      question: "",
      options: ["", "", "", ""],
      answer: 0,
    };
    setRoom({
      ...room,
      quiz: [...room.quiz, newQuestion],
    });
  };

  const removeQuestion = (index: number) => {
    const newQuiz = [...room.quiz];
    newQuiz.splice(index, 1);
    setRoom({
      ...room,
      quiz: newQuiz,
    });
  };

  const updateQuestion = (index: number, field: string, value: any) => {
    const newQuiz = [...room.quiz];
    newQuiz[index] = {
      ...newQuiz[index],
      [field]: value,
    };
    setRoom({
      ...room,
      quiz: newQuiz,
    });
  };

  const updateQuestionOption = (
    questionIndex: number,
    optionIndex: number,
    value: string
  ) => {
    const newQuiz = [...room.quiz];
    const options = [...newQuiz[questionIndex].options];
    options[optionIndex] = value;
    newQuiz[questionIndex] = {
      ...newQuiz[questionIndex],
      options,
    };
    setRoom({
      ...room,
      quiz: newQuiz,
    });
  };

  const onSectionDragEnd = (result: any) => {
    if (!result.destination) return;

    const sections = [...room.sections];
    const [reorderedSection] = sections.splice(result.source.index, 1);
    sections.splice(result.destination.index, 0, reorderedSection);

    setRoom({
      ...room,
      sections: sections,
    });
  };

  const onQuestionDragEnd = (result: any) => {
    if (!result.destination) return;

    const quiz = [...room.quiz];
    const [reorderedQuestion] = quiz.splice(result.source.index, 1);
    quiz.splice(result.destination.index, 0, reorderedQuestion);

    setRoom({
      ...room,
      quiz: quiz,
    });
  };

  return (
    <CMSLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">
              {isNewRoom ? "Create New Room" : `Edit Room: ${room.title}`}
            </h1>
            <p className="text-muted-foreground">
              {isNewRoom
                ? "Create a new learning room for your students"
                : "Edit room content, sections, and quiz questions"}
            </p>
          </div>

          <Button onClick={saveRoom}>
            <Save className="h-4 w-4 mr-2" />
            Save Room
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="details">
              <BookOpen className="h-4 w-4 mr-2" />
              Room Details
            </TabsTrigger>
            <TabsTrigger value="content">
              <FileCheck className="h-4 w-4 mr-2" />
              Content Sections
            </TabsTrigger>
            <TabsTrigger value="quiz">
              <Clock className="h-4 w-4 mr-2" />
              Quiz Questions
            </TabsTrigger>
          </TabsList>

          {/* Room Details Tab */}
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Room Title</Label>
                    <Input
                      id="title"
                      value={room.title}
                      onChange={(e) =>
                        setRoom({ ...room, title: e.target.value })
                      }
                      placeholder="Enter room title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="module">Module</Label>
                    <Input
                      id="module"
                      value={room.module}
                      onChange={(e) =>
                        setRoom({ ...room, module: e.target.value })
                      }
                      placeholder="Enter module name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={room.subject}
                      onValueChange={(value) =>
                        setRoom({ ...room, subject: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Biology">Biology</SelectItem>
                        <SelectItem value="Chemistry">Chemistry</SelectItem>
                        <SelectItem value="Physics">Physics</SelectItem>
                        <SelectItem value="Mathematics">Mathematics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Difficulty Level</Label>
                    <Select
                      value={room.level}
                      onValueChange={(value) =>
                        setRoom({ ...room, level: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Select
                      value={room.duration}
                      onValueChange={(value) =>
                        setRoom({ ...room, duration: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15 mins">15 mins</SelectItem>
                        <SelectItem value="30 mins">30 mins</SelectItem>
                        <SelectItem value="45 mins">45 mins</SelectItem>
                        <SelectItem value="60 mins">60 mins</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="instructor">Instructor</Label>
                    <Input
                      id="instructor"
                      value={room.instructor}
                      onChange={(e) =>
                        setRoom({ ...room, instructor: e.target.value })
                      }
                      placeholder="Enter instructor name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="xpPoints">XP Points</Label>
                    <Input
                      id="xpPoints"
                      type="number"
                      value={room.xpPoints}
                      onChange={(e) =>
                        setRoom({
                          ...room,
                          xpPoints: parseInt(e.target.value) || 0,
                        })
                      }
                      placeholder="Enter XP points"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Room Description</Label>
                  <Textarea
                    id="description"
                    value={room.description}
                    onChange={(e) =>
                      setRoom({ ...room, description: e.target.value })
                    }
                    placeholder="Enter room description"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Sections Tab */}
          <TabsContent value="content">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Content Sections</CardTitle>
                <Button onClick={addSection} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Section
                </Button>
              </CardHeader>
              <CardContent>
                <DragDropContext onDragEnd={onSectionDragEnd}>
                  <Droppable droppableId="sections">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-4"
                      >
                        {room.sections.map((section, index) => (
                          <Draggable
                            key={section.id}
                            draggableId={section.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className="border rounded-lg p-4 bg-white"
                              >
                                <div className="flex items-start justify-between mb-4">
                                  <div
                                    {...provided.dragHandleProps}
                                    className="cursor-grab p-2 mr-2"
                                  >
                                    <GripVertical className="h-5 w-5 text-muted-foreground" />
                                  </div>
                                  <div className="flex-1">
                                    <Input
                                      value={section.title}
                                      onChange={(e) =>
                                        updateSection(
                                          index,
                                          "title",
                                          e.target.value
                                        )
                                      }
                                      placeholder="Section title"
                                      className="mb-2"
                                    />
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeSection(index)}
                                    className="text-red-500"
                                  >
                                    <X className="h-5 w-5" />
                                  </Button>
                                </div>

                                <div className="space-y-4">
                                  <Textarea
                                    value={section.content}
                                    onChange={(e) =>
                                      updateSection(
                                        index,
                                        "content",
                                        e.target.value
                                      )
                                    }
                                    placeholder="Section content (supports markdown)"
                                    rows={6}
                                  />

                                  <div className="flex items-center gap-2">
                                    <Button
                                      variant="outline"
                                      className="flex-1"
                                    >
                                      <FileImage className="h-4 w-4 mr-2" />
                                      {section.image
                                        ? "Change Image"
                                        : "Add Image"}
                                    </Button>
                                    <Button
                                      variant="outline"
                                      className="flex-1"
                                    >
                                      <FileVideo className="h-4 w-4 mr-2" />
                                      Add Video
                                    </Button>
                                  </div>

                                  {section.image && (
                                    <div className="border rounded p-2">
                                      <img
                                        src={section.image}
                                        alt="Section preview"
                                        className="max-h-40 object-contain mx-auto"
                                      />
                                      <div className="flex justify-end mt-2">
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="text-red-500"
                                          onClick={() =>
                                            updateSection(index, "image", "")
                                          }
                                        >
                                          <X className="h-4 w-4 mr-2" />
                                          Remove Image
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                        {room.sections.length === 0 && (
                          <div className="text-center p-8 border rounded-lg bg-muted/20">
                            <p className="text-muted-foreground">
                              No sections yet. Click "Add Section" to create
                              your first section.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>

                {room.sections.length > 0 && (
                  <div className="mt-4 flex justify-end">
                    <Button onClick={addSection} variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Another Section
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quiz Questions Tab */}
          <TabsContent value="quiz">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Quiz Questions</CardTitle>
                <Button onClick={addQuestion} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Question
                </Button>
              </CardHeader>
              <CardContent>
                <DragDropContext onDragEnd={onQuestionDragEnd}>
                  <Droppable droppableId="questions">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-4"
                      >
                        {room.quiz.map((question, index) => (
                          <Draggable
                            key={question.id}
                            draggableId={question.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className="border rounded-lg p-4 bg-white"
                              >
                                <div className="flex items-start justify-between mb-4">
                                  <div
                                    {...provided.dragHandleProps}
                                    className="cursor-grab p-2 mr-2"
                                  >
                                    <GripVertical className="h-5 w-5 text-muted-foreground" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-medium mb-2">
                                      Question {index + 1}
                                    </p>
                                    <Textarea
                                      value={question.question}
                                      onChange={(e) =>
                                        updateQuestion(
                                          index,
                                          "question",
                                          e.target.value
                                        )
                                      }
                                      placeholder="Enter question text"
                                      className="mb-4"
                                      rows={2}
                                    />

                                    <div className="space-y-3">
                                      {question.options.map(
                                        (option, optionIndex) => (
                                          <div
                                            key={optionIndex}
                                            className="flex items-center gap-3"
                                          >
                                            <div className="flex-shrink-0">
                                              <input
                                                type="radio"
                                                id={`q${index}-o${optionIndex}`}
                                                name={`question-${index}`}
                                                checked={
                                                  question.answer ===
                                                  optionIndex
                                                }
                                                onChange={() =>
                                                  updateQuestion(
                                                    index,
                                                    "answer",
                                                    optionIndex
                                                  )
                                                }
                                                className="mr-2"
                                              />
                                            </div>
                                            <Input
                                              value={option}
                                              onChange={(e) =>
                                                updateQuestionOption(
                                                  index,
                                                  optionIndex,
                                                  e.target.value
                                                )
                                              }
                                              placeholder={`Option ${
                                                optionIndex + 1
                                              }`}
                                              className="flex-1"
                                            />
                                          </div>
                                        )
                                      )}
                                    </div>

                                    <div className="mt-2 text-sm text-muted-foreground">
                                      <p>
                                        Select the correct answer by clicking
                                        the radio button.
                                      </p>
                                    </div>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeQuestion(index)}
                                    className="text-red-500"
                                  >
                                    <X className="h-5 w-5" />
                                  </Button>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                        {room.quiz.length === 0 && (
                          <div className="text-center p-8 border rounded-lg bg-muted/20">
                            <p className="text-muted-foreground">
                              No questions yet. Click "Add Question" to create
                              your first quiz question.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>

                {room.quiz.length > 0 && (
                  <div className="mt-4 flex justify-end">
                    <Button onClick={addQuestion} variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Another Question
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </CMSLayout>
  );
};

export default RoomEditor;
